import { Redirect } from "expo-router";

const Index = () => {
  const loggedIn = false;
  if (loggedIn) {
    return <Redirect href="/main" />;
  } else {
    return <Redirect href="/onboarding" />;
  }
};
export default Index;
