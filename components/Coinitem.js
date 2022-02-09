import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Coinitem = ({ coin }) => {
  return (
    <View style={styleItem.containerItem}>
      <View style={styleItem.CoinName}>
        <Image style={styleItem.image} source={{ uri: coin.image }} />
        <View style={styleItem.containerNames}>
          <Text style={styleItem.text}>{coin.name}</Text>
          <Text style={styleItem.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styleItem.textPrice}>${coin.current_price}</Text>
        <Text
          style={[
            styleItem.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styleItem.priceUp
              : styleItem.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

const styleItem = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  CoinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  textPrice:{
      color:"#fff",
      textAlign:"right"
  },
  pricePercentage: {
    textAlign: "right"
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#FC4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default Coinitem;
