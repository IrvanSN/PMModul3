import React, {createRef, useState} from "react";
import {DrawerLayoutAndroid, StatusBar, View} from "react-native";
import Article from "./screens/Article";
import Header from "./components/Header";
import Button from "./components/Button";
import List from "./screens/List";
import Separator from "./components/Separator";

// Fungsi inti dari aplikasi
const App = () => {
  // Mengatur state untuk menentukan halaman mana yang ditampilkan
  const [page, setPage] = useState("list");
  // drawer untuk mengatur fitur navbar
  const drawer = createRef();

  // fungsi untuk menangani jika beralih ke menu yang lain
  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  }

  // Komponen untuk menampilkan list halaman yang tersedia dengan masing-masing menggunakan onPress untuk menangani jika tombol ditekan
  const NavigationView = (props) => (
      <View style={{padding: 30, backgroundColor: "#222222", flex: 1}}>
        <Button text="List" onPress={() => changePage(props.drawer, 'list')}/>
        <Separator height={30}/>
        <Button text="Article" onPress={() => changePage(props.drawer, 'article')}/>
        <Separator height={30}/>
        <Button text="Close" onPress={() => props.drawer.current.closeDrawer()}/>
      </View>
  );

  // Merender halaman awal yang ditampilkan
  return (
      <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition="left"
          renderNavigationView={() => <NavigationView drawer={drawer}/>}
      >
        <View style={{paddingTop: 0}}>
          <StatusBar style="auto" backgroundColor="#AA0002"/>
          <Header drawer={drawer}/>
          {page === 'list' && <List/>}
          {page === 'article' && <Article/>}
        </View>
      </DrawerLayoutAndroid>
  );
};

export default App;
