import React from "react";
import {View} from "react-native";

// Komponen Separator fungsinya untuk memberi jarak, memberi jarak dengan menerima props height
const Separator = (props) => {
  return <View style={{height: props.height}}></View>;
};

export default Separator;
