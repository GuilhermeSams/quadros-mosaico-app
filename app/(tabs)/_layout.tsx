import { Tabs } from "expo-router";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { View } from "react-native";
import Header from "@/components/Header";
import { StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar
        backgroundColor="#a08145" // Altera a cor de fundo da StatusBar
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveBackgroundColor: "white",
          headerShown: true,
          tabBarShowLabel: false,
          header: () => <Header />,
          tabBarStyle: {
            height: 65,
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarLabelStyle: { paddingBottom: 7 },
        }}
      >
        <Tabs.Screen
          name="(public)/index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused && (
                  <View
                    style={{
                      backgroundColor: "#F2D7A7",
                      borderRadius: 999,
                      width: 45,
                      height: 45,
                      position: "absolute",
                    }}
                  />
                )}
                <AntDesign name="home" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="(public)/offers"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused && (
                  <View
                    style={{
                      backgroundColor: "#F2D7A7",
                      borderRadius: 999,
                      width: 45,
                      height: 45,
                      position: "absolute",
                    }}
                  />
                )}
                <Feather name="percent" size={24} color={color} />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="(auth)"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused && (
                  <View
                    style={{
                      backgroundColor: "#F2D7A7",
                      borderRadius: 999,
                      width: 45,
                      height: 45,
                      position: "absolute",
                    }}
                  />
                )}
                <Feather name="shopping-cart" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="account/login"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused && (
                  <View
                    style={{
                      backgroundColor: "#F2D7A7",
                      borderRadius: 999,
                      width: 45,
                      height: 45,
                      position: "absolute",
                    }}
                  />
                )}
                <AntDesign name="user" size={24} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
