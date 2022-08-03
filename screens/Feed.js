import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Feeds</Text>
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
    cardContainer: {
      flex: 0.85
    },
    noStories: {
      flex: 0.85,
      justifyContent: "center",
      alignItems: "center"
    },
    noStoriesTextLight: {
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans"
    },
    noStoriesText: {
      color: "white",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans"
    }
  });
  