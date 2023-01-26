import { StyleSheet, View } from "react-native";
import { SIZES } from "../../../constants/index";
import CategoryList from "./category-list";
import CategoryBookList from "./category-book-list";
import { useState } from "react";

export default function CategorySection() {
  var [selectedIndex, setStateSelectedIndex] = useState(0);
  return (
    <View>
      <CategoryList
        update={setStateSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <CategoryBookList index={selectedIndex} />
    </View>
  );
}

