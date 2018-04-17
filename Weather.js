import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비",
    subtitle: "비가 추적추적 내리네요",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "날씨 화창",
    subtitle: "날씨가 매우 화창...소풍가기 딱!",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "번개, 비, 폭우",
    subtitle: "호랭이 장가가는듯..비오는날씨",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름",
    subtitle: "구름이 끼긴 했지만 황사는 아니니..",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
    subtitle: "엘사가 돌아옴..",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "부슬비",
    subtitle: "부슬부슬...",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "짙은 안개",
    subtitle: "안개잼..",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "습하고 안개",
    subtitle: "습하고...안개 끼고 난리도 아니네..",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp, country }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}º</Text>
        <Text style={styles.country}>{country}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

// Weather.propTypes = {
//   temp: PropTypes.number.isRequired,
//   weatherName: PropTypes.string.isRequired
// };

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  temperature: {
    fontSize: 60,
    color: "white"
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    marginBottom: 100,
    backgroundColor: "transparent",
    color: "white",
    fontSize: 24
  },
  country: {
    marginTop:50,
    backgroundColor: "transparent",
    color: "white",
    fontSize: 24
  }
});