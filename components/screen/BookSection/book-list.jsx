import { StyleSheet, FlatList } from "react-native";
import { COLORS, SIZES } from "../../../constants/index";
import { myBooks } from "../../../data/index";
import BookListItem from "./book-list-item";

export default function BookList() {
  return (
    <FlatList
      style={styles.MyBooks}
      data={myBooks}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <BookListItem book={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  BookCover: {
    height: 200,
    width: 150,
    borderRadius: SIZES.radius,
  },

  MainCardInfoIcon: {
    height: 10,
    width: 10,
  },
  MainCardInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
  },
  MainCard: {
    padding: 5,
    margin: 5,
  },
  container: {
    flex: 1,
  },
  books: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
