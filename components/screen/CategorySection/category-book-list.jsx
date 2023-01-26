import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { categories } from "../../../data/index";
import CategoryBookListItem from "./category-book-list-item";

export default function CategoryBookList({ index }) {
  var items = categories[index].books.map((book, i) => (
    <View key={i}>
      <CategoryBookListItem book={book} />
    </View>
  ));

  return <View>{items}</View>;
}
