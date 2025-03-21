import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-03-19"),
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
  {
    id: "e11",
    description: " book",
    amount: 29.99,
    date: new Date("2025-03-19"),
  },
  {
    id: "e12",
    description: " book",
    amount: 29.99,
    date: new Date("2025-03-19"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = uuidv4(); // Genera un ID univoco sicuro
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    const formattedData = {
      ...expenseData,
      date: new Date(expenseData.date), // Assicura che sia un oggetto Date
    };
    dispatch({ type: "ADD", payload: formattedData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
