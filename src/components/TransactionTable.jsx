function TransactionTable(props) {
 return (
  <div className="container">
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
       <td>{item.date.replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[digit])}</td>

       {item.type === 'income' ? (
        <td className="income">
         {item.amount.toLocaleString('fa-IR')}+
         <span className="currency"> تومان</span>
        </td>
       ) : (
        <td></td>
       )}

       {item.type === 'expense' ? (
        <td className="expense">
         {item.amount.toLocaleString('fa-IR')}−
         <span className="currency"> تومان</span>
        </td>
       ) : (
        <td></td>
       )}

       <td className="description">{item.description}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}

export default TransactionTable;
