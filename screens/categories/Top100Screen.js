import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const places = [
  {
    id: "1",
    name: "NOAX HOTEL",
    address: "Gazi Mustafa Kemal Blv. 275 / A, 33110 Akdeniz",
    phone: "03242323300",
    image: "https://via.placeholder.com/80",
  },
  {
    id: "2",
    name: "DİVAN OTEL",
    address: "Akkent, Gazi Mustafa Kemal Blv. No: 612",
    phone: "03243561100",
    image: "https://via.placeholder.com/80",
  },
];

const Top100Screen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "gray",
  },
  phone: {
    fontSize: 14,
    color: "#FF8800",
    fontWeight: "bold",
  },
});

export default Top100Screen;