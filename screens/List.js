import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from "react-native";

// Data dummy untuk simulasi API artikel
const data = [
  {
    id: 1,
    title:
        "Tiga Mahasiswa IT Telkom Surabaya Bersinar di Konferensi Internasional ISICO 2023",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/ISICO-2023.jpg",
  },
  {
    id: 2,
    title:
        "Pentingnya Manajemen Konfigurasi dalam Rekayasa Perangkat Lunak dan Penerapannya",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/manajemen-konfigurasi.jpeg",
  },
  {
    id: 3,
    title: "Model-Model Software Development Life Cycle (SDLC)",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle-.jpeg",
  },
  {
    id: 4,
    title: "Software Development Life Cycle (SDLC)",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle.jpg",
  },
  {
    id: 5,
    title:
        "Sidang Terbuka Senat ITTelkom Surabaya Menyambut Dies Natalis ke-5, Pengukuhan Mahasiswa Baru dan PKKMB Dewangkara Maetala 2023",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/institut-teknologi-telkom-surabaya.jpg",
  },
  {
    id: 6,
    title:
        "Tiga Mahasiswa IT Telkom Surabaya Bersinar di Konferensi Internasional ISICO 2023",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/ISICO-2023.jpg",
  },
  {
    id: 7,
    title:
        "Pentingnya Manajemen Konfigurasi dalam Rekayasa Perangkat Lunak dan Penerapannya",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/manajemen-konfigurasi.jpeg",
  },
  {
    id: 8,
    title: "Model-Model Software Development Life Cycle (SDLC)",
    image: "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle-.jpeg",
  },
  {
    id: 9,
    title: "Software Development Life Cycle (SDLC)",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle.jpg",
  },
  {
    id: 10,
    title:
        "Sidang Terbuka Senat ITTelkom Surabaya Menyambut Dies Natalis ke-5, Pengukuhan Mahasiswa Baru dan PKKMB Dewangkara Maetala 2023",
    image:
        "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/institut-teknologi-telkom-surabaya.jpg",
  },
];

// Komponen List untuk merender setiap item dari data dummy diatas
const List = () => {
  const renderItem = ({item}) => {
    // TouchableOpacity adalah komponen tombol yang memiliki animasi jika ditekan
    // Image adalaah komponen untuk merender image dari sebuah uri/path
    // Text adalah komponen untuk merender sebuah teks
    return (
        <TouchableOpacity style={styles.view} onPress={() => alert("Pressed")}>
          <View>
            <Image source={{uri: item.image}} style={styles.image}/>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
    );
  };

  // Menggunakan komponen FlatList dari React Native untuk merender semua item dari list artikel diatas
  return (
      <View style={{paddingBottom: 100}}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
      </View>
  );
};


export default List;

// Menggunakan styling untuk membentuk list artikel menjadi rapih
const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: null,
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
});


