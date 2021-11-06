import React, {useState} from "react"
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from "./Dashboard";
import Camera from "./CameraPage";
import {SafeAreaView, TouchableHighlight, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Camera" component={Camera} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;
