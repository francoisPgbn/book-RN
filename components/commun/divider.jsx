import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/index";

export default function Divider() {
  return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: COLORS.white,
    width: 1,
  },
});
