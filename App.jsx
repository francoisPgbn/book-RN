import { StyleSheet, View, ScrollView } from "react-native";
import { COLORS, SIZES } from "./constants/index";
import { FONTS } from "./constants/theme";
import { useFonts } from "expo-font";
import TopAppBar from "./components/screen/TopAppBar/top-app-bar";
import HeaderSection from "./components/screen/HeaderSection/header-section";
import BookSection from "./components/screen/BookSection/book-section";
import CategorySection from "./components/screen/CategorySection/category-section";


export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.layout}>
      <TopAppBar />
      <View style={styles.container}>
        <HeaderSection />
        <ScrollView nestedScrollEnabled={true}>
          <BookSection />
          <CategorySection />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Genre: {
    marginRight: 10,
    backgroundColor: COLORS.lightRed,
    borderRadius: SIZES.radius,
    padding: 5,
    flexWrap: "wrap",
  },
  Genres: {
    flexDirection: "row",
  },
  CategoriesName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  CategorySection: {
    flex: 1,
  },
  MyBooks: {},
  BookCover: {
    height: 200,
    width: 150,
    borderRadius: SIZES.radius,
  },
  SecondaryBookCover: {
    height: 150,
    width: 100,
    borderRadius: SIZES.radius,
  },
  SecondaryCardMainInfo: {
    backgroundColor: "red",
    flex: 1,
  },
  SecondaryCardInfoIcon: {
    height: 15,
    width: 15,
  },
  SecondaryCardInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    flex: 1,
    padding: 5,
  },
  SecondaryCard: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    margin: 5,
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
  BookSection: {
    flex: 1,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  books: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 20,
  },
  layout: {
    flex: 1,
  },
});
