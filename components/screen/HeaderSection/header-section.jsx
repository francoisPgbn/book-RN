import { StyleSheet, View } from "react-native";
import FeatureSection from "./feature-section";
import HomeSection from "./home-section";

export default function HeaderSection() {
  return (
    <View style={styles.HeaderSectionRoot}>
      <HomeSection />
      <FeatureSection />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderSectionRoot: {
    paddingBottom: 20,
  },
});
