// a hook containing profile data and whether it's been loaded from async storage

import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultProfile = {
  name: "",
  email: "",
  phone: "",
  hasCompletedOnboarding: false,
};

export default function useProfileData() {
  const [profileData, setProfileData] = useState(defaultProfile);
  const [profileDataLoaded, setProfileDataLoaded] = useState(false);

  const getProfileData = async () => {
    const data = await AsyncStorage.getItem("profileData");
    const parsedData = JSON.parse(data);
    console.log("parsedData", parsedData);
    setProfileData(parsedData || defaultProfile);
    setProfileDataLoaded(true);
  };

  const updateProfileData = async (newData: {
    name?: string;
    email?: string;
    phone?: string;
    hasCompletedOnboarding?: boolean;
  }) => {
    // if no new data, do nothing
    if (!newData) return;

    // get existing data
    const existingData = await AsyncStorage.getItem("profileData");
    const parsedData = JSON.parse(existingData);

    // if no existing data, use default profile
    const data = parsedData || defaultProfile;

    // update data with new data
    const updatedData = { ...data, ...newData };

    // save updated data
    await AsyncStorage.setItem("profileData", JSON.stringify(updatedData));

    // update state
    setProfileData(updatedData);
  };

  return {
    profile: profileData,
    getProfile: getProfileData,
    isLoading: !profileDataLoaded,
    updateProfile: updateProfileData,
  };
}
