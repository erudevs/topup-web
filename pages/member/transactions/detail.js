import Sidebar from "../../../components/organisms/Sidebar";
import TransactionsDetailContent from "../../../components/TransactionsDetailContent";

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar />
      <TransactionsDetailContent />
    </section>
  );
}
