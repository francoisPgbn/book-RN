import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../commun/button";
import { COLORS, SIZES, FONTS } from "../../../constants/index";
import BookList from "./book-list";

export default function BookSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My book</Text>
        <CustomButton label={"see more"} styleLabel={styles.btnLabel} />
      </View>
      <BookList />
    </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginBottom: 10,
  },
  title: {
    color: COLORS.white,
    ...FONTS.h2,
  },
  btnLabel: {
    color: COLORS.lightGray,
    textDecorationLine: "underline",
  },
});
