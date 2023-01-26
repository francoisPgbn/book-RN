import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, icons } from "../../../constants/index";
import { profile } from "../../../data/index";
import CustomButton from "../../commun/button";

export default function HomeSection() {
  var label = `${profile.point} points`;
  return (
    <View style={styles.HomeSection}>
      <View style={styles.HomeText}>
        <Text style={styles.h3}>Good morning</Text>
        <Text style={styles.h2}>{profile.name}</Text>
      </View>
      <CustomButton
        icon={icons.plus_icon}
        label={label}
        styleBody={styles.btnPoint}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  h3: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  h2: {
    color: COLORS.white,
    ...FONTS.h2,
  },
  btnPoint: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    height: 30,
    padding: 5,
  },
});
