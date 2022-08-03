import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela de Histórias</Text>
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
    storyContainer: {
      flex: 1
    },
    storyCard: {
      margin: RFValue(20),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    storyCardLight: {
      margin: RFValue(20),
      backgroundColor: "white",
      borderRadius: RFValue(20),
      shadowColor: "rgb(0, 0, 0)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 2
    },
    image: {
      width: "100%",
      alignSelf: "center",
      height: RFValue(200),
      borderTopLeftRadius: RFValue(20),
      borderTopRightRadius: RFValue(20),
      resizeMode: "contain"
    },
    dataContainer: {
      flexDirection: "row",
      padding: RFValue(20)
    },
    titleTextContainer: {
      flex: 0.8
    },
    storyTitleText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      color: "white"
    },
    storyTitleTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      color: "black"
    },
    storyAuthorText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(18),
      color: "white"
    },
    storyAuthorTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(18),
      color: "black"
    },
    iconContainer: {
      flex: 0.2
    },
    storyTextContainer: {
      padding: RFValue(20)
    },
    storyText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(15),
      color: "white"
    },
    storyTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(15),
      color: "black"
    },
    moralText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(20),
      color: "white"
    },
    moralTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(20),
      color: "black"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      margin: RFValue(10)
    },
    likeButtonLiked: {
      flexDirection: "row",
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeButtonDisliked: {
      flexDirection: "row",
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#eb3948",
      borderRadius: RFValue(30),
      borderWidth: 2
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    },
    likeTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });
  