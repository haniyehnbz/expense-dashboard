function TransactionTable(props) {
  return (
    <div>
      <h2>تراکنش‌ها</h2>

      <table dir="rtl">
        <thead>
          <tr>
            <th>تاریخ</th>
            <th>درآمد (تومان)</th>
            <th>هزینه (تومان)</th>
            <th>شرح</th>
          </tr>
        </thead>

        <tbody>
          {props.transactions.map((item) => (
            <tr key={item.id}>
              <td>
                {item.date.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit])}
              </td>

              <td>
                {item.type === "income"
                  ? item.amount.toLocaleString("fa-IR")
                  : "-"}
              </td>

              <td>
                {item.type === "expense"
                  ? item.amount.toLocaleString("fa-IR")
                  : "-"}
              </td>

              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
