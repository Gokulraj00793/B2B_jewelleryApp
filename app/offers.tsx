import { EvilIcons, Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const CardOne = '../assets/images/img1.png'
const CardTwo = '../assets/images/img2.jpg'

const OffersScreen = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="h-[72] flex-row px-[38] items-start mt-[50]">
        <View className="mr-[14]">
          <Text style={{ fontSize: 30 }}>Meilleures offers</Text>
          <Text style={{ fontSize: 30 }}>Pour vous</Text>
        </View>

        <EvilIcons style={{marginTop: 5}} name="search" size={40} color="black" />
      </View>

      {/* List Horizontal */}
      <ScrollView
        horizontal={true}
        style={{ paddingVertical: 70, marginTop: 20, paddingLeft: 20 }}
        contentContainerStyle={{ paddingRight: 50 }}
        showsHorizontalScrollIndicator={false}
      >
        {/* First Card */}
        <View
          style={{ backgroundColor: "rgba(158, 129, 190, 1)", padding: 10 }}
          className="w-[137] h-[182] rounded-2xl"
        >
          <Image
            style={{ position: "absolute", width: 119, height: 119, top: -70 }}
            source={require("../assets/images/PNGDB_bracelet-gold-jewellery-bangle-ring_0JunM0Lzb8 1.png")}
          />
          <View style={{ marginTop: 40 }} className="space-y-1">
            <Text style={{ color: "white", fontSize: 13 }}>
              Tiger New York City
            </Text>
            <Text style={{ color: "white", fontSize: 13 }}>
              Jewellery Bangle
            </Text>
            <Text style={{ color: "white", fontSize: 13 }}>Ring Bracelete</Text>
          </View>
          <Text style={{ color: "white", fontSize: 13, marginTop: 10 }}>
            899.300 XOF
          </Text>

          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 50,
              backgroundColor: "#AF98D2",
              position: "absolute",
              bottom: -18,
              right: -10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="plus" size={24} color="white" />
          </View>
        </View>

        {/* Second Card */}
        <View
          style={{
            backgroundColor: "rgba(158, 129, 190, 1)",
            padding: 10,
            marginLeft: 20,
          }}
          className="w-[137] h-[182] rounded-2xl"
        >
          <Image
            style={{ position: "absolute", width: 119, height: 119, top: -70 }}
            source={require("../assets/images/PNGDB_cartier-love-bracelet-jewellery-bangle_KZJazwakqB 1.png")}
          />
          <View style={{ marginTop: 40 }} className="space-y-1">
            <Text style={{ color: "white", fontSize: 13 }}>
              Tiger New York City
            </Text>
            <Text style={{ color: "white", fontSize: 13 }}>
              Jewellery Bangle
            </Text>
            <Text style={{ color: "white", fontSize: 13 }}>Ring Bracelete</Text>
          </View>
          <Text style={{ color: "white", fontSize: 13, marginTop: 10 }}>
            899.300 XOF
          </Text>

          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 50,
              backgroundColor: "#AF98D2",
              position: "absolute",
              bottom: -18,
              right: -10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="plus" size={24} color="white" />
          </View>
        </View>

        {/* Third Card */}
        <View
          style={{
            backgroundColor: "rgba(158, 129, 190, 1)",
            padding: 10,
            marginLeft: 20,
          }}
          className="w-[137] h-[182] rounded-2xl"
        >
          <Image
            style={{ position: "absolute", width: 119, height: 119, top: -70 }}
            source={require("../assets/images/PNGDB_new-york-city-ring-bracelet-jewellery-bangle_7GZhFGzgeT 1.png")}
          />
          <View style={{ marginTop: 40 }} className="space-y-1">
            <Text style={{ color: "white", fontSize: 13 }}>
              Tiger New York City
            </Text>
            <Text style={{ color: "white", fontSize: 13 }}>
              Jewellery Bangle
            </Text>
            <Text style={{ color: "white", fontSize: 13 }}>Ring Bracelete</Text>
          </View>
          <Text style={{ color: "white", fontSize: 13, marginTop: 10 }}>
            899.300 XOF
          </Text>

          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 50,
              backgroundColor: "#AF98D2",
              position: "absolute",
              bottom: -18,
              right: -10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="plus" size={24} color="white" />
          </View>
        </View>
      </ScrollView>

      {/* Locations */}
      <Text style={{ marginLeft: 38, fontSize: 25, marginBottom: 20 }}>
        Principaux Boutiques
      </Text>

      <ScrollView
        horizontal={false}
        contentContainerStyle={{ paddingBottom: 14 }}
        showsVerticalScrollIndicator={false}
      >
        {/* List Card 1 */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 38,
            alignItems: "center",
          }}
        >
          {/* Image */}
          <View style={{ width: 49, height: 49, overflow: "hidden" }}>
            <Image
              style={{
                flex: 1,
                width: "100%",
                borderWidth: 1,
                borderRadius: 10,
              }}
              source={require("../assets/images/img1.png")}
              placeholder={"sadasd"}
              contentFit="cover"
              transition={1000}
            />
          </View>
          {/* content */}
          <View style={{ flexDirection: "column", flex: 1, paddingLeft: 10 }}>
            <Text style={{ marginBottom: 5 }}>Cartier Jaw</Text>
            <Text>34 Avenue, Maiz, USA</Text>
          </View>
          {/* location icon */}
          <View>
            <Image
              style={{ width: 27, height: 27 }}
              source={require("../assets/images/netweorkIcon.png")}
            />
          </View>
        </View>

        {/* List Card 2 */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 38,
            alignItems: "center",
            marginTop: 22,
          }}
        >
          {/* Image */}
          <View
            style={{
              width: 49,
              height: 49,
            }}
          >
            
            <Image
              style={{
                width: "100%",
                borderWidth: 1,
                borderRadius: 10,
                height: "100%",
                borderColor: 'transparent'
              }}
              source={require("../assets/images/img2.jpg")}
              placeholder={"sadasd"}
              contentFit="cover"
              transition={1000}
            />

          </View>
          {/* content */}
          <View style={{ flexDirection: "column", flex: 1, paddingLeft: 10 }}>
            <Text style={{ marginBottom: 5 }}>Cartier Jaw</Text>
            <Text>34 Avenue, Maiz, USA</Text>
          </View>
          {/* location icon */}
          <View>
            <Image
              style={{ width: 27, height: 27 }}
              source={require("../assets/images/netweorkIcon.png")}
            />
          </View>
        </View>

        {/* List Card 3 */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 38,
            alignItems: "center",
            marginTop: 22,
          }}
        >
          {/* Image */}
          <View style={{ width: 49, height: 49 }}>
            <Image
              style={{
                width: "100%",
                borderWidth: 1,
                borderRadius: 10,
                height: "100%",
                borderColor: 'transparent'
              }}
              source={require("../assets/images/img3.jpg")}
              placeholder={"sadasd"}
              contentFit="cover"
              transition={1000}
            />
          </View>
          {/* content */}
          <View style={{ flexDirection: "column", flex: 1, paddingLeft: 10 }}>
            <Text style={{ marginBottom: 5 }}>Cartier Jaw</Text>
            <Text>34 Avenue, Maiz, USA</Text>
          </View>
          {/* location icon */}
          <View>
            <Image
              style={{ width: 27, height: 27 }}
              source={require("../assets/images/netweorkIcon.png")}
            />
          </View>
        </View>

        {/* List Card 4 */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 38,
            alignItems: "center",
            marginTop: 22,
          }}
        >
          {/* Image */}
          <View
            style={{
              width: 49,
              height: 49,
              overflow: "hidden",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'transparent'
            }}
          >
            <Image
              style={{
                flex: 1,
                width: "100%",
              }}
              source={require("../assets/images/img4.jpg")}
              placeholder={"sadasd"}
              contentFit="cover"
              transition={1000}
            />
          </View>
          {/* content */}
          <View style={{ flexDirection: "column", flex: 1, paddingLeft: 10 }}>
            <Text style={{ marginBottom: 5 }}>Cartier Jaw</Text>
            <Text>34 Avenue, Maiz, USA</Text>
          </View>
          {/* location icon */}
          <View>
            <Image
              style={{ width: 27, height: 27 }}
              source={require("../assets/images/netweorkIcon.png")}
            />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default OffersScreen;
