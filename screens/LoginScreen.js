import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LoadingScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Login com o Google</Text>
            </View>
        )
    }
}

















const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.4,
      justifyContent: "center",
      alignItems: "center"
    },
    appIcon: {
      width: RFValue(130),
      height: RFValue(130),
      resizeMode: "contain"
    },
    appTitleText: {
      color: "white",
      textAlign: "center",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans"
    },
    buttonContainer: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      width: RFValue(250),
      height: RFValue(50),
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: RFValue(30),
      backgroundColor: "white"
    },
    googleIcon: {
      width: RFValue(30),
      height: RFValue(30),
      resizeMode: "contain"
    },
    googleText: {
      color: "black",
      fontSize: RFValue(20),
      fontFamily: "Bubblegum-Sans"
    },
    cloudContainer: {
      flex: 0.3
    },
    cloudImage: {
      position: "absolute",
      width: "100%",
      resizeMode: "contain",
      bottom: RFValue(-5)
    }
  });
  