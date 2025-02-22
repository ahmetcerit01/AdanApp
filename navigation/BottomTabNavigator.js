import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import MainScreen from "../screens/MainScreen";
import Top100Screen from "../screens/categories/Top100Screen";
import CategoriesScreen from "../screens/CategoriesScreen";

// Stack Navigator - Ana Sayfa ve Top 100 Mekanlar geçişi için
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Top100" component={Top100Screen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Ana Sayfa") iconName = "home-outline";
          else if (route.name === "Favoriler") iconName = "heart-outline";
          else if (route.name === "Ara") iconName = "search-outline";
          else if (route.name === "Kategoriler") iconName = "grid-outline";
          else if (route.name === "Profil") iconName = "person-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF8800",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Ana Sayfa" component={MainStack} />
      <Tab.Screen name="Favoriler" component={MainScreen} />
      <Tab.Screen name="Ara" component={MainScreen} />
      <Tab.Screen name="Kategoriler" component={CategoriesScreen} />
      <Tab.Screen name="Profil" component={MainScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;