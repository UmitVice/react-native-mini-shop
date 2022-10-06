import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Product from "./src/components/Product/Product";
import NavBar from "./src/components/NavBar/NavBar";
import Home from "./src/pages/Home";

import {Provider} from "react-redux";
import { store } from "./src/store";



export default function App() {

  return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home />

        </View>
        <NavBar />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
