import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trouser",
    amount: 29.99,
    date: new Date("2021-01-19"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 9.99,
    date: new Date("2021-01-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 19.99,
    date: new Date("2021-05-01"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 29.99,
    date: new Date("2021-05-25"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trouser",
    amount: 29.99,
    date: new Date("2021-01-19"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 9.99,
    date: new Date("2021-01-01"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 19.99,
    date: new Date("2021-05-01"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 29.99,
    date: new Date("2021-05-25"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />

      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
