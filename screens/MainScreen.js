import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MainScreen = () => {
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/men/1.jpg" // Varsayılan profil resmi
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Status Bar'ı Turuncu Yap */}
        <StatusBar backgroundColor="#FF8800" barStyle="light-content" />

        {/* Üst Kısım */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
              <View>
                <Text style={styles.welcomeText}>Hoş Geldin</Text>
                <Text style={styles.username}>Ahmet Cerit</Text>
              </View>
            </View>
            <Ionicons name="notifications-outline" size={28} color="white" style={styles.notificationIcon} />
          </View>

          {/* Arama Kutusu */}
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="gray" />
            <TextInput placeholder="Ara..." style={styles.searchInput} />
          </View>
        </View>

        {/* Kategori Bölümü */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Kategoriler</Text>
          <Text style={styles.showAll}>Tümünü Gör</Text>
        </View>
        <View style={styles.grid}>
          {categories.map((item, index) => (
            <View key={index} style={styles.card}>
              <Ionicons name={item.icon} size={30} color="#FF8800" />
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Kategoriler (Eski isimlerle güncellendi)
const categories = [
  { name: "Top 100 Mekanlar", icon: "star-outline" },
  { name: "İndirimler & Kampanyalar", icon: "megaphone-outline" },
  { name: "Taksi", icon: "car-outline" },
  { name: "Firma Kategorileri", icon: "grid-outline" },
  { name: "Eczane", icon: "medkit-outline" },
  { name: "Etkinlik Takvimi", icon: "calendar-outline" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    backgroundColor: "#FF8800",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 80,//40dı
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    color: "white",
    fontSize: 16,
  },
  username: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  notificationIcon: {
    color: "white",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30, // Burayı artırdım, aşağı kayması için
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  showAll: {
    fontSize: 14,
    color: "#FF8800",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 15, // Kategorileri aşağı kaydırmak için artırıldı
  },
  card: {
    width: "30%",
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
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

export default MainScreen;