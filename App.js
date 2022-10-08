import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/pages/Home";
import ProductDetail from "./src/pages/ProductDetail";
import Cart from "./src/pages/Cart";
import {Provider} from "react-redux";
import { store } from "./src/store";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={ProductDetail} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
