import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreateStory extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Criar História</Text>
            </View>
        )
    }
}














const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    containerLight: {
      flex: 1,
      backgroundColor: "white"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    appTitleTextLight: {
      color: "black",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    fieldsContainer: {
      flex: 0.85
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain"
    },
    inputFont: {
      height: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      fontFamily: "Bubblegum-Sans"
    },
    inputFontLight: {
      height: RFValue(40),
      borderColor: "black",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "black",
      fontFamily: "Bubblegum-Sans"
    },
    dropdownLabel: {
      color: "white",
      fontFamily: "Bubblegum-Sans"
    },
    dropdownLabelLight: {
      color: "black",
      fontFamily: "Bubblegum-Sans"
    },
    inputFontExtra: {
      marginTop: RFValue(15)
    },
    inputTextBig: {
      textAlignVertical: "top",
      padding: RFValue(5)
    },
    submitButton: {
      marginTop: RFValue(20),
      alignItems: "center",
      justifyContent: "center"
    }
  });
  