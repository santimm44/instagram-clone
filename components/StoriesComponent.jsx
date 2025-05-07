import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import profilePicture from "../assets/profilePic.jpg";
import { LinearGradient } from "expo-linear-gradient";

export default function StoriesComponent() {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <LinearGradient
          style={styles.LinearGradient}
          colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}
        >
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={profilePicture} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Santiago</Text>
      </View>
      <View style={styles.container}>
        <LinearGradient
          style={styles.LinearGradient}
          colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}
        >
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={profilePicture} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Santiago</Text>
      </View>
      <View style={styles.container}>
        <LinearGradient
          style={styles.LinearGradient}
          colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}
        >
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={profilePicture} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Santiago</Text>
      </View>
      <View style={styles.container}>
        <LinearGradient
          style={styles.LinearGradient}
          colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}
        >
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={profilePicture} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Santiago</Text>
      </View>
      <View style={styles.container}>
        <LinearGradient
          style={styles.LinearGradient}
          colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]}
        >
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={profilePicture} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Santiago</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  imageWrapper: {
    width: 87,
    height: 87,
    borderRadius: 50,
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
  },
  LinearGradient: {
    width: 94,
    height: 94,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  labelText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginTop:5
  },
});
