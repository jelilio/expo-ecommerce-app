import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Google from "@/assets/images/google-logo.svg";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require("@/assets/images/ecommerce-splash.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255, 255, 255, 0.9)",
              "rgba(255, 255, 255, 1)",
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Text style={styles.title}>ShopX</Text>
              <Text style={styles.description}>
                One Stop Solution for All Your Needs
              </Text>

              <View style={styles.socialLoginWrapper}>
                <Link href={"/signup"} asChild>
                  <TouchableOpacity style={styles.button}>
                    <Ionicons
                      name="mail-outline"
                      size={20}
                      color={Colors.black}
                    />
                    <Text style={styles.buttonTxt}>Continue with Email</Text>
                  </TouchableOpacity>
                </Link>
              </View>
              <View style={styles.socialLoginWrapper}>
                <TouchableOpacity style={styles.button}>
                  <Google width={20} height={20} />
                  <Text style={styles.buttonTxt}>Continue with Google</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.socialLoginWrapper}>
                <TouchableOpacity style={styles.button}>
                  <Ionicons name="logo-apple" size={20} color={Colors.black} />
                  <Text style={styles.buttonTxt}>Continue with Apple</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginTxtWrapper}>
                <Text style={styles.loginTxt}>Already have an account? </Text>
                <Link href={"/signin"} asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTxtSpan}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "700",
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20,
  },
  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    color: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
  loginTxtWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  loginTxt: {
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
