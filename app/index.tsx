import { Redirect } from "expo-router";
import useProfileData from "../hooks/useProfileData";
import { useEffect } from "react";
import useMenuData from "../hooks/useMenuData";

const Index = () => {
  const { profile, isLoading: isProfileLoading, getProfile } = useProfileData();
  const { getMenuData, isLoading: isMenuLoading } = useMenuData();

  useEffect(() => {
    getMenuData();
  }, []);

  if (isProfileLoading) {
    return null;
  }

  const { hasCompletedOnboarding } = profile;

  if (hasCompletedOnboarding) {
    return <Redirect href="/Main" />;
  } else {
    return <Redirect href="/onboarding" />;
  }
};
export default Index;
