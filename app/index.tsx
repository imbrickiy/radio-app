import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import { useWindowDimensions } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <View className="flex-1 w-[100%] h-[100%]">
      <View className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          source={require("../assets/images/bg.png")}
          className="absolute top-0 left-0 blur-[32px]"
          style={[
            {
              width,
              height,
            },
          ]}
        />
        <Image
          source={require("../assets/images/dj.png")}
          className="object-cover opacity-50"
          style={[
            {
              width,
              height,
            },
          ]}
        />
      </View>
      <SafeAreaView className="flex-1 justify-center items-center backdrop-blur-lg bg-black/50">
        <View className="my-auto gap-4 h-full pt-[80px]">
          <Text className="text-white text-[60px] font-extrabold text-wrap font-sfpro">
            Let’s Get
            <Text className="text-[#FF2D55]"> Started</Text>
          </Text>
          <Text className="text-white max-w-[204px] font-sfpro text-[16px] font-[400]">
            Enjoy the best radio stations from your home, don't miss out on
            anything
          </Text>
          <View className="mt-auto mb-16">
            <Pressable
              className="bg-[#FF296D] rounded-xl w-full h-[50px] justify-center items-center shadow-lg shadow-[#FF296D]"
              android_ripple={{ color: "#FF296D" }}
              onPress={() => router.push("/signup")}
            >
              <Text className="text-white text-[20px] font-sfpro">
                Get Started
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
}
