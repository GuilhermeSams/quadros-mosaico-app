import { Tabs } from "expo-router";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveBackgroundColor: "white",
        tabBarActiveBackgroundColor: "#F2D7A7",
        headerShown: false,
        tabBarStyle: {
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 999,
        },
        tabBarLabelStyle: { paddingBottom: 9 },
      }}
    >
      <Tabs.Screen
        name="(public)/index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={focused ? "home" : "home"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(public)/offers"
        options={{
          title: "Ofertas",
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name={focused ? "percent" : "percent"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(auth)"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name={focused ? "shopping-cart" : "shopping-cart"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account/login"
        options={{
          title: "Conta",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={focused ? "user" : "user"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
