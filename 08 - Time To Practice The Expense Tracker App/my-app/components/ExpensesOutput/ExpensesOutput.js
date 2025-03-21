import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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
    description: "A book",
    amount: 29.99,
    date: new Date("2021-05-25"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />

      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
