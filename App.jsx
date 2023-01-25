import {
  StyleSheet,
  LogBox,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { icons, COLORS, SIZES } from "./constants/index";
import { myBooks, categories } from "./data/index";
import { FONTS } from "./constants/theme";

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(["VirtualizedLists"]);

export default function App() {
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.HeaderSection}>
          <View style={styles.HomeSection}>
            <View style={styles.HomeText}>
              <Text style={styles.h3}>Good morning</Text>
              <Text style={styles.h2}>Username</Text>
            </View>
            <Pressable style={styles.buttonPoint}>
              <View style={styles.buttonBodyPoint}>
                <Image style={styles.icon} source={icons.plus_icon} />
                <Text style={styles.h3}>600 points</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.Features}>
            <Pressable>
              <View style={styles.buttonFeatures}>
                <Image style={styles.icon} source={icons.claim_icon} />
                {/* <Text style={styles.h3}>+</Text> */}
                <Text style={styles.h3}>Claim</Text>
              </View>
            </Pressable>
            <View style={styles.divider}></View>
            <Pressable>
              <View style={styles.buttonFeatures}>
                <Image style={styles.icon} source={icons.point_icon} />
                {/* <Text style={styles.h3}>+</Text> */}
                <Text style={styles.h3}>Get point</Text>
              </View>
            </Pressable>
            <View style={styles.divider}></View>
            <Pressable>
              <View style={styles.buttonFeatures}>
                <Image style={styles.icon} source={icons.card_icon} />
                {/* <Text style={styles.h3}>+</Text> */}
                <Text style={styles.h3}>My card</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <ScrollView>
          <View style={styles.BookSection}>
            <View style={styles.options}>
              <Text>My book</Text>
              <Text>see more</Text>
            </View>
            <View style={styles.books}>
              <FlatList
                style={styles.MyBooks}
                data={myBooks}
                horizontal
                renderItem={({ item }) => (
                  <Pressable style={styles.MainCard}>
                    <Image
                      style={styles.BookCover}
                      source={item.bookCover}
                      resizeMode={"cover"}
                    />
                    <View style={styles.MainCardInfo}>
                      <Text>
                        <Image
                          style={styles.MainCardInfoIcon}
                          source={icons.clock_icon}
                        />
                        {item.lastRead}
                      </Text>
                      <Text>
                        <Image
                          style={styles.MainCardInfoIcon}
                          source={icons.menu_icon}
                        />
                        {item.completion}
                      </Text>
                    </View>
                  </Pressable>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <View style={styles.CategorySection}>
            <FlatList
              style={styles.Categories}
              data={categories}
              horizontal
              renderItem={({ item }) => (
                <Pressable style={styles.MainCard}>
                  <Text style={styles.CategoriesName}>{item.categoryName}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />
            <FlatList
              style={styles.Categories}
              data={categories[0].books}
              renderItem={({ item }) => (
                <View style={styles.SecondaryCard}>
                  <Image
                    style={styles.SecondaryBookCover}
                    source={item.bookCover}
                  />
                  <View style={styles.SecondaryCardInfo}>
                    <View style={styles.SecondaryCardMainInfo}>
                      <Text>{item.bookName}</Text>
                      <Text>{item.author}</Text>
                      <Text>
                        <Image
                          style={styles.SecondaryCardInfoIcon}
                          source={icons.page_icon}
                        />
                        {item.pageNo}
                      </Text>
                      <Text>
                        <Image
                          style={styles.SecondaryCardInfoIcon}
                          source={icons.read_icon}
                        />
                        {item.readed}
                      </Text>
                    </View>
                    <Image
                      style={styles.SecondaryCardInfoIcon}
                      source={icons.bookmark_icon}
                    />
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CategoriesName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  CategorySection: {
    flex: 1,
  },
  MyBooks: { gap: 20 },
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
    backgroundColor: COLORS.black,
    paddingTop: 10,
  },
  header: {
    height: 80,
    backgroundColor: COLORS.primary,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  layout: {
    flex: 1,
  },
  title: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  HeaderSection: {
    padding: 10,
  },
  HomeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  h3: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  h2: {
    color: COLORS.white,
    ...FONTS.h2,
  },
  point: {
    ...FONTS.h3,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black,
  },
  buttonBodyPoint: {
    flexDirection: "row",
  },
  buttonPoint: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    padding: 5,
  },
  buttonFeatures: {
    flexDirection: "row",
  },
  Features: {
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 20,
    backgroundColor: COLORS.darkBlue,
    justifyContent: "space-around",
    borderRadius: SIZES.radius,
  },
  divider: {
    backgroundColor: COLORS.white,
    width: 1,
  },
});
