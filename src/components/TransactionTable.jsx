function TransactionTable() {
  function TransactionTable(props) {
    return (
      <div>
        <h2>Transactions</h2>

        {props.transactions.map((item) => {
          return (
            <p key={item.id}>
              {item.title} - {item.amount}
            </p>
          );
        })}
      </div>
    );
  }
}
export default TransactionTable;
