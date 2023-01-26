import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../../constants/index";

export default function CustomButton({
  label,
  icon,
  styleIcon,
  styleBody,
  styleLabel,
  click
}) {
  var image =
    icon != null ? (
      <Image style={{ ...styles.icon, ...styleIcon }} source={icon} />
    ) : (
      <></>
    );
  return (
    <Pressable style={{ ...styles.body, ...styleBody }} onPress={()=> click()}>
      {/* <View style={{ ...styles.body, ...styleBody }}> */}
        {image}
        <Text style={{ ...styles.label, ...styleLabel }}>{label}</Text>
      {/* </View> */}
    </Pressable>
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
  body: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  label: {
    ...FONTS.body4,
    color: COLORS.white,
    marginLeft: 5,
  },
});
