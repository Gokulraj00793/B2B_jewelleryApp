import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Wallpaper */}
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          flex: 1,
          top: 0,
          left: 0,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/wallpaper.png")}
          style={{ width: windowWidth + 30, height: windowHeight + 0 }}
        />
      </View>

      {/* Logo */}
      <View
        style={{
          marginLeft: 52,
          marginTop: 56,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F4F4F4",
          width: 56,
          height: 56,
          borderRadius: 8
        }}
      >
        <Image
          className="w-[43] h-[42]"
          source={require("../assets/images/logo.png")}
        />
      </View>

    {/* Title */}
    <View className="ml-[52] mt-[45]">
        <Text className="text-2xl text-white">Bienvenue</Text>
        <Text className="text-2xl text-white">chez Tiger Jewelry</Text>
    </View>

    {/* Butons */}
    <View className="space-y-5 mt-[316] items-center">
        <Button onPressIn={() => router.push('/login')} style={{width: 270, height: 51, borderColor: 'white', borderWidth: 2}} mode="contained" onPress={() => console.log('Pressed')}>
            Connection
        </Button>
        <Button onPressIn={() => router.push('/offers')} style={{width: 270, height: 51, backgroundColor: 'white', justifyContent: 'center'}} mode="contained" onPress={() => console.log('Pressed')}>
            Insicription
        </Button>

        <Pressable onPressIn={() => router.push('/login')} className="text-sm text-white">
          <Text style={{color: '#FFF'}}>Have an account ? Sign in</Text>
        </Pressable>
    </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
