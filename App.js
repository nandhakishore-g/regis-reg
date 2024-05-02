import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import NewPage from "./screens/newpage";
import FeedPage from "./screens/FeedPage";

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
        headerTitleAlign: 'center', tabBarLabel: 'Signup', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="abacus" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewPage" component={NewPage} />
        <Stack.Screen name="FeedPage" component={FeedPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}