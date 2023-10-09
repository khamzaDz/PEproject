import { StyleSheet, Text, View, StatusBar } from "react-native";
import { gStyle } from "../styles/style";
import React from "react";
import AppLoading from "expo-app-loading";


export default function Main() {
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Главная</Text>
      </View>
    );
  }


const styles = StyleSheet.create({

});
