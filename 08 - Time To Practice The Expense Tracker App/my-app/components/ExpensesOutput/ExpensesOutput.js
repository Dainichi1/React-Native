import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenese }) {
  return (
    <View>
      <ExpensesSummary />

      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
