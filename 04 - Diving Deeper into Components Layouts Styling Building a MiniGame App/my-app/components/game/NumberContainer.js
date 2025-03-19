import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },

  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
