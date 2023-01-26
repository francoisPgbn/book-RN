import { StyleSheet, View } from "react-native";
import { COLORS, SIZES, icons } from "../../../constants/index";
import CustomButton from "../../commun/button";
import Divider from "../../commun/divider";

export default function FeatureSection() {
  return (
    <View style={styles.Features}>
      <CustomButton icon={icons.claim_icon} label={"Claim"} />
      <Divider />
      <CustomButton icon={icons.point_icon} label={"Get point"} />
      <Divider />
      <CustomButton icon={icons.card_icon} label={"My card"} />
    </View>
  );
}

const styles = StyleSheet.create({
  Features: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: COLORS.secondary,
    justifyContent: "space-around",
    borderRadius: SIZES.radius,
  },
});