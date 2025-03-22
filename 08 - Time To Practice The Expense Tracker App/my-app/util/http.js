import axios from "axios";

export function storeExpense(expenseData) {
  !axios.post(
    "https://sezione-10-react-native-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
