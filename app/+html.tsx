import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  StatusBar,
} from "react-native";

export default function Root({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme(); // 'light' or 'dark'

  return (
    <SafeAreaView
      style={[
        styles.container,
        scheme === "dark" ? styles.darkBackground : styles.lightBackground,
      ]}
    >
      <StatusBar
        barStyle={scheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  lightBackground: {
    backgroundColor: "#fff",
  },
  darkBackground: {
    backgroundColor: "#000",
  },
});
