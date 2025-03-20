import { Text, View, Button } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>The Meal Detail Screen ({mealId})!</Text>
    </View>
  );
}

export default MealDetailScreen;
