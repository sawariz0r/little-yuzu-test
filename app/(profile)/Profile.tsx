import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import Input from "../../components/Input";
import useProfileData from "../../hooks/useProfileData";

type Props = {};

const Profile = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const { updateProfile, profile, getProfile, logout } = useProfileData();

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setPhone(profile.phone);
  }, [profile]);

  const handleSave = () => {
    updateProfile({
      name,
      email,
      phone,
    });
  };

  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Edit your profile</Text>
      </View>
      <Input
        label="Name"
        placeholder="Name Namesson"
        value={name}
        onChange={setName}
      />
      <Input
        label="Email"
        placeholder="name@domain.com"
        value={email}
        onChange={setEmail}
      />
      <Input
        label="Phone"
        placeholder="0123457890"
        value={phone}
        onChange={setPhone}
      />

      <Spacer />
      <Button text="Save" onPress={handleSave} />
      <View style={{ height: 12 }} />
      <Button
        text="Logout"
        onPress={() => {
          logout();
          router.replace("/onboarding");
        }}
        color="#f3f3f3"
        innerTextStyle={{
          color: "red",
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    paddingTop: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

export default Profile;
