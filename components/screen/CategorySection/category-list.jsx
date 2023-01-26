import { StyleSheet, FlatList } from "react-native";
import { COLORS, FONTS } from "../../../constants/index";
import { categories } from "../../../data/index";
import CustomButton from "../../commun/button";

export default function CategoryList({ update, selectedIndex }) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={styles.Categories}
      data={categories}
      horizontal
      renderItem={({ item, index }) => (
        <CustomButton
          click={() => update(index)}
          label={item.categoryName}
          styleLabel={{
            ...styles.CategoriesName,
            color: selectedIndex == index ? COLORS.white : COLORS.lightGray,
          }}
          styleBody={styles.MainCard}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  CategoriesName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  MainCard: {
    marginRight: 15,
  },
});
