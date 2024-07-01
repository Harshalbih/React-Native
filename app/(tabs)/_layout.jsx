import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons, ionicons } from "@expo/vector-icons";

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: true
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => <Ionicons name="albums" size={24} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color }) => <Ionicons name="apps" size={24} />,
        }}
      />
    </Tabs>
  );
}
