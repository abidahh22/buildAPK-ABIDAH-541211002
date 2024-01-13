import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const a = () => {
  //misal aja ini ada fungsinya
};

const HomePage = () => {
  const [like, setLike] = useState(0);
  const [tumb, setTumb] = useState(0);
  const [sm, setSm] = useState(0);
  const [huh, setHuh] = useState(0);

  const hLike = () => {
    setLike(like + 1);
  };

  const hTumb = () => {
    setTumb(tumb + 1);
  };

  const hSm = () => {
    setSm(sm + 1);
  };

  const hHuh = () => {
    setHuh(huh + 1);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.holderImage}>
          <Image
            style={styles.imageBig}
            source={require("../assets/PICT1.png")}
          />
        </View>
        <Text style={styles.textStyle}>Abidah F</Text>
        <Text style={styles.smallTextStyle}>
          Perkenalkan, saya pencinta pantat
        </Text>
        <TouchableOpacity style={styles.buttonDetailed} onPress={a}>
          <Text style={styles.buttonTextDetailed}>About Me</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.textStyle}></Text>
          <Text style={styles.textStyle}>--- Portofolio ---</Text>
          <SafeAreaView
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.holderImage}>
              <Image
                style={styles.imageBig}
                source={require("../assets/PICT2.png")}
              />
            </View>
            <Text style={styles.smallTextStyle}>
              aku gatau ini apa tapi itu
            </Text>
            <TouchableOpacity style={styles.buttonDetailed} onPress={a}>
              <Text style={styles.buttonTextDetailed}>See More</Text>
            </TouchableOpacity>

            <View style={styles.row}>
              <TouchableOpacity onPress={hLike}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>❤️{like}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={hTumb}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>👍{tumb}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={hSm}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>😁{sm}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={hHuh}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>😒{huh}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    fontFamily: "poppins",
  },
  buttonDetailed: {
    marginTop: 15,
    width: 255,
    paddingTop: 6,
    paddingBottom: 8,
    borderRadius: 8,
    backgroundColor: "#7D9471",
    alignSelf: "center",
  },
  buttonTextDetailed: {
    color: "white",
    textAlign: "center",
    margin: 8,
    fontSize: 14,
  },
  holderImage: {
    flex: 1,
    alignSelf: "center",
    paddingTop: 36,
    paddingBottom: 12,
  },
  imageBig: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 13,
  },
  smallTextStyle: {
    fontSize: 16,
    alignSelf: "center",
    color: "#000000",
    marginTop: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#7D9471",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default HomePage;
