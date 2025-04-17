import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  //Image,
  Dimensions,
  Pressable,
  TextInput,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { Image } from 'expo-image';


const LoginScreen = () => {
  const router = useRouter();

  useEffect(() => {

  },[])

  return (
    <View>
      {/* Banner */}
      <View
        style={{
          paddingLeft: 38,
          paddingTop: 50,
          height: 397,
          backgroundColor: "rgba(158, 129, 190, 1)",
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons   name="arrow-back" size={40} color="white" />
        </Pressable>

        <View style={{ marginTop: 61 }}>
          <Text style={{ color: "white", fontSize: 30 }}>Salut,</Text>
          <Text style={{ color: "white", fontSize: 30 }}>Steven</Text>
        </View>

        <Image
          source={require('../assets/images/Packages.png')}
          style={{
            position: "absolute",
            width: 242,
            height: 500,
            transform: [{ rotateX: "34deg" }],
            right: 0,
            bottom: -100,
            zIndex: 1,
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "90.2%",
            backgroundColor: "white",
            height: "10%",
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 20,
            left: 80,
            width: "20%",
            backgroundColor: "white",
            height: "15%",
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 15,
            left: 145,
            width: "49%",
            backgroundColor: "white",
            height: "10%",
          }}
        />
      </View>

      {/* Input Fields */}
      <View
        style={{
          alignItems: "center",
          paddingTop: 45,
          //backgroundColor: "green",
        }}
      >
        {/* Input container */}
        <View
          style={{
            flexDirection: "column",
            width: 270,
            borderBottomColor: "#CCBEE3",
            borderBottomWidth: 2,
            paddingBottom: 12,
            marginBottom: 40,
          }}
        >
          <Text style={{ marginBottom: 9, color: "#CCBEE3" }}>Email</Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 24,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 17,
              }}
            >
              <Image
                style={{ width: 19.5, height: 13.5, resizeMode: "contain" }}
                source={require("../assets/images/messageIcon.png")}
              />
            </View>
            <TextInput
              style={{ flex: 1, textAlign: "left" }}
              placeholderTextColor={"black"}
              placeholder="user@gmail.com"
            />
          </View>
        </View>

        {/* Input container */}
        <View
          style={{
            flexDirection: "column",
            width: 270,
            borderBottomColor: "#CCBEE3",
            borderBottomWidth: 2,
            paddingBottom: 12,
          }}
        >
          <Text style={{ marginBottom: 9, color: "#CCBEE3" }}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 24,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 17,
              }}
            >
              <Image
                style={{ width: 19.5, height: 13.5, resizeMode: "contain" }}
                source={require("../assets/images/keyIcon.png")}
              />
            </View>
            <TextInput
              style={{ flex: 1, textAlign: "left" }}
              placeholderTextColor={"black"}
              secureTextEntry
              placeholder="............."
            />
          </View>
        </View>

        {/* button container */}
        <View>
          <Button
            style={{
              marginTop: 48,
              width: 270,
              height: 55,
              justifyContent: "center",
              backgroundColor: 'rgba(158, 129, 190, 1)'
            }}
            textColor="white"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Login
          </Button>
        </View>

      </View>
    </View>
  );
};

export default LoginScreen;
