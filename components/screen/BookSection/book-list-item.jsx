import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { icons, COLORS, SIZES, FONTS } from "../../../constants/index";

import Label from "../../commun/label";

export default function BookListItem({ book }) {
  return (
    <Pressable style={styles.card} click={() => {}}>
      <Image
        style={styles.bookCover}
        source={book.bookCover}
        resizeMode={"cover"}
      />
      <View style={styles.info}>
        <Label
          label={book.lastRead}
          icon={icons.clock_icon}
          styleIcon={styles.icon}
          styleLabel={styles.label}
        />
        <Label
          label={book.completion}
          icon={icons.menu_icon}
          styleIcon={styles.icon}
          styleLabel={styles.label}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bookCover: {
    height: 200,
    width: 150,
    borderRadius: SIZES.radius,
  },

  card: {
    marginRight: 15,
  },
  label: {
    color: COLORS.lightGray,
    ...FONTS.body4,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
  },
});
