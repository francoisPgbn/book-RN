import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { SIZES, icons } from "../../../constants/index";
import { categories } from "../../../data/index";
import CategoryBookListItem from "./category-book-list-item";

export default function CategoryBookList({ index }) {
  return (
    <FlatList
      nestedScrollEnabled={true}
      data={categories[index].books}
      renderItem={({ item }) => <CategoryBookListItem book={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
