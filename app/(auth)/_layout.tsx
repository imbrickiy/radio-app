import { NavigationContainer } from "@react-navigation/native";
import { Slot, Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
        animationDuration: 1000,
      }}
    />
  );
}
