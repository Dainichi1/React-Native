import axios from "axios";

const BACKEND_URL =
  "https://sezione-10-react-native-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = axios.post(BACKEND_URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.post(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      data: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
