import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  return (
    <View className="flex-1 bg-black/50">
      <View className="absolute top-0 left-0 w-full h-full">
        <Image
          source={require("../../assets/images/bg.png")}
          resizeMode="cover"
          className="absolute top-0 left-0"
          style={[
            {
              width,
              height,
            },
          ]}
        />
        <View className="inline-block border-solid rotate-[25deg] border-t-[230px] border-r-[400px] border-l-0 border-b-[230px] border-l-transparent border-r-[#f12a6e] border-t-transparent border-b-transparent opacity-70 ml-64" />
      </View>
      <SafeAreaView className="flex-1 flex justify-center m-8 items-start">
        <View className="gap-2 h-full flex justify-center w-full">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="cover"
            className="size-[58px]"
          />
          <Text className="text-[50px] font-bold text-white mt-4 font-sfpro">
            Sign up
          </Text>
          <Text className="text-[25px] text-white font-sfpro">
            to start play
          </Text>

          <Text className="text-[16px] text-white mt-12 font-sfpro font-[500]">
            Email
          </Text>
          <TextInput
            placeholder="Your Email"
            className="bg-[#01012A] border-2 border-[#f12a6e] text-white rounded-lg focus:ring-[#f12a6e]  focus:border-[#f12a6e]  block p-4 mt-4 w-full placeholder:text-[#ffffff]/50 placeholder-shown:text-[16px] placeholder-shown:font-[300]"
          />
          <View className="mt-[75px]">
            <Pressable
              className="bg-[#05D8E8] h-[50px] w-[153px] justify-center items-center shadow-lg shadow-[#05D8E8]"
              android_ripple={{ color: "#05D8E8" }}
              onPress={() => router.push("/(tabs)")}
            >
              <AntDesign name="arrowright" size={27} color="white" />
            </Pressable>
          </View>
          <View className="flex flex-row gap-2 items-center mt-6">
            <Text className="text-[20px] font-[300] line-height-[173%] text-white font-sfpro">
              Or
            </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text className="text-[20px] font-[300] line-height-[173%] text-white font-sfpro underline">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="light" translucent={true} />
    </View>
  );
}
