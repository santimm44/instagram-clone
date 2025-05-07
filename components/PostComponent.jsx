import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import StoriesComponent from "./StoriesComponent";
import profilePicture from "../assets/profilePic.jpg";
import spider from "../assets/spider.jpg";

export default function PostComponent() {
  const [post, setPost] = useState([
    {
      profilepic: profilePicture,
      userName: "Santiago",
      postImage: profilePicture,
      numOfLikes: "9.5K",
      description: "Me",
      commentsArray: [
        {
          user2: "Isaiah",
          userComment: "omg!",
        },
      ],
    },
    {
      profilepic: spider,
      userName: "Daddy Long Legs",
      postImage: spider,
      numOfLikes: "6.9K",
      description: "The killer spider!!!",
      commentsArray: [
        {
          user2: "Jacob",
          userComment: "Sick!",
        },
      ],
    },
  ]);

  return (
    <ScrollView>
      <StoriesComponent />

      {post.map((post, index) => {
        return (
          //Parent <View> with key
          <View key={index}>
            {/*
              This view will contain username, profile img, and the elipse menu
            */}
            <View style={styles.profileNav}>
              <View style={{ paddingTop: 10 }}>
                <Image source={post.profilepic} style={styles.profileImage} />
              </View>

              <View style={styles.userNameContainer}>
                <Text style={styles.userNameText}>{post.userName}</Text>
              </View>
              <View style={styles.dotContainer}>
                <Text style={styles.dotText}>.</Text>
                <Text style={styles.dotText}>.</Text>
                <Text style={styles.dotText}>.</Text>
              </View>
            </View>

            {/*
                The post content
              */}
            <View>
              <Image style={styles.postImg} source={post.postImage} />
            </View>

            {/*
            Parent container for our icons and like
            */}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileNav: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  userNameContainer: {
    paddingLeft: 15,
    justifyContent: "center",
    paddingTop: 10,
  },
  userNameText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  dotText: {
    color: "white",
    fontSize: 30,
    lineHeight: 10,
  },
  dotContainer: {
    flex: 1,
    paddingRight: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  postImg: {
    height: 400,
    width: "100%",
  },
});
