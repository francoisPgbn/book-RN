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
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 20,
  },
  layout: {
    flex: 1,
  },
});
