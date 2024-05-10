import React from "react";
import { Button, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import NewPage from "./screens/newpage";
import FeedPage from "./screens/FeedPage";
import QueriesPage from "./screens/QueriesPage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        //tabBarActiveBackgroundColor: 'gray'
      })}>
      <Tab.Screen name="Login" component={Login} options={{
        headerTitleAlign: 'center', tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Signup" component={Signup} options={{
        headerTitleAlign: 'center', tabBarLabel: 'About', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-cowboy-hat" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Queries" component={QueriesPage} options={{
        headerTitleAlign: 'center', tabBarLabel: "Queries", tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="send-outline" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> :
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="NewPage" component={NewPage} />
          <Stack.Screen name="FeedPage" component={FeedPage} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}