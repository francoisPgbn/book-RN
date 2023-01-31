import { StyleSheet, View } from "react-native";
import { COLORS, SIZES, icons } from "../../../constants/index";
import CustomButton from "../../commun/button";
import Divider from "../../commun/divider";

export default function FeatureSection() {
  return (
    <View style={styles.Features}>
      <CustomButton icon={icons.claim_icon} label={"Claim"} click={() => {}} />
      <Divider />
      <CustomButton
        icon={icons.point_icon}
        label={"Get point"}
        click={() => {}}
      />
      <Divider />
      <CustomButton icon={icons.card_icon} label={"My card"} click={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  Features: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: COLORS.gray1,
    justifyContent: "space-around",
    borderRadius: SIZES.radius,
  },
});
