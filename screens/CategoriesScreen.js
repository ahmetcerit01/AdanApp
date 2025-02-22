import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { name: "Evcil Hayvanlar", icon: "paw-outline" },
  { name: "Dijital Baskı Hizmetleri", icon: "print-outline" },
  { name: "Gezilecek Yerler", icon: "map-outline" },
  { name: "Araç Kiralama", icon: "car-outline" },
  { name: "Güzellik", icon: "sparkles-outline" },
  { name: "Çocuklar İçin", icon: "balloon-outline" },
  { name: "Otel", icon: "bed-outline" },
  { name: "Seyahat ve Ulaşım", icon: "airplane-outline" },
  { name: "Eğitim Kurumları", icon: "school-outline" },
  { name: "Yapı ve Dekorasyon", icon: "hammer-outline" },
  { name: "Spor", icon: "barbell-outline" },
];

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      {/* Üst Bar */}
      <View style={styles.topBar}>
        <Text style={styles.appTitle}>AdanApp</Text>
        <Text style={styles.categoriesTitle}>Kategoriler</Text>
      </View>

      {/* Kategori Listesi */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name={item.icon} size={30} color="#FF8800" />
            <Text style={styles.cardText}>{item.name}</Text>
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
  },
  topBar: {
    backgroundColor: "#FF8800",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  categoriesTitle: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  listContainer: {
    padding: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CategoriesScreen;