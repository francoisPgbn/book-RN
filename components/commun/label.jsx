import { StyleSheet, Text, Image, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/index";

export default function Label({ label, icon, styleIcon, styleLabel }) {
  return (
    <View style={{ ...styles.body }}>
      <Image style={{ ...styles.icon, ...styleIcon }} source={icon} />
      <Text style={{ ...styles.label, ...styleLabel }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
    padding: 5,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray1,
  },
  label: {
    ...FONTS.body4,
    color: COLORS.white,
    marginLeft: 5,
  },
  body: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
