import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../../constants/index";

export default function TopAppBar() {
  return (
    <View style={styles.bar}>
      <Text style={styles.title}>Book Store App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 80,
    backgroundColor: COLORS.primary,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    ...FONTS.h3,
    marginBottom: 10,
  },
});
