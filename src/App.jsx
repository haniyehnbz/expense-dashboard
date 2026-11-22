import "./App.css";
import TransactionTable from "./components/TransactionTable";

function App() {
  const transactions = [
    {
      id: 1,
      date: "1404/06/31",
      description: "قسط آخر پروژه کاربر",
      amount: 3100000,
      type: "income",
    },
    {
      id: 2,
      date: "1404/06/27",
      description: "خرید لباس",
      amount: 1230000,
      type: "expense",
    },
    {
      id: 3,
      date: "1404/06/25",
      description: "سود سپرده",
      amount: 17000,
      type: "income",
    },
  ];
  <TransactionTable transactions={transactions} />;
}

export default App;
