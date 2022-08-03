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
                <Text>Histórias</Text>
            </View>
        )
    }
}





















const styles = StyleSheet.create({
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    cardContainerLight: {
      margin: RFValue(13),
      backgroundColor: "white",
      borderRadius: RFValue(20),
      shadowColor: "rgb(0, 0, 0)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      shadowOpacity: RFValue(0.5),
      shadowRadius: RFValue(5),
      elevation: RFValue(2)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    titleTextContainer: {
      flex: 0.8
    },
    iconContainer: {
      flex: 0.2
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
    descriptionContainer: {
      marginTop: RFValue(5)
    },
    descriptionText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(13),
      color: "white"
    },
    descriptionTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(13),
      color: "black"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButtonLiked: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeButtonDisliked: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderColor: "#eb3948",
      borderWidth: 2,
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: 25,
      marginLeft: 25,
      marginTop: 6
    },
    likeTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: 25,
      marginLeft: 25,
      marginTop: 6
    }
  });
  