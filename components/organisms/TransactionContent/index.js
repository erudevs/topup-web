import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAPIMemberTransaction } from "../../../services/memberService";
import { formatNumber } from "../../../utils";
import OverviewTableRow from "../OverviewContent/OverviewTableRow";
import ButtonTab from "./ButtonTab";

export default function TransactionContent() {
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [tab, setTab] = useState("all");

  const getMemberTransaction = useCallback(async (status) => {
    const result = await getAPIMemberTransaction(status);
    if (result.error) {
      toast.error(result.message);
    } else {
      const { total, transaction } = result.data;
      setTotalTransaction(total);
      setTransactions(transaction);
    }
  }, []);

  const onTabClick = (value) => {
    setTab(value);
    getMemberTransaction(value);
  };

  useEffect(() => {
    getMemberTransaction("all");
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You&lsquo;ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">{formatNumber.format(totalTransaction)}</h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab onClick={() => onTabClick("all")} btnName="All Trx" active={tab === "all"} />
              <ButtonTab onClick={() => onTabClick("success")} btnName="Success" active={tab === "success"} />
              <ButtonTab onClick={() => onTabClick("pending")} btnName="Pending" active={tab === "pending"} />
              <ButtonTab onClick={() => onTabClick("failed")} btnName="Failed" active={tab === "failed"} />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table">
              <thead>
                <tr className="color-palette-1">
                  <th scope="col">
                    No
                  </th>
                  <th scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transactions.length > 0 ? transactions.map((transaction, i) => (
                  <OverviewTableRow
                    id={transaction._id}
                    nbr={i + 1}
                    key={transaction._id}
                    className="align-middle"
                    itemImage={`${IMG}/${transaction.historyVoucherTopup.thumbnail}`}
                    itemName={transaction.historyVoucherTopup.gameName}
                    itemCategory={transaction.historyVoucherTopup.category}
                    itemAmount={`${transaction.historyVoucherTopup.coinQty} ${transaction.historyVoucherTopup.coinName}`}
                    itemTotal={transaction.value}
                    itemStatus={transaction.status}
                    itemDetail
                  />
                )) : (
                  <tr>
                    <td colSpan={6}>
                      <div className="text-center categories-card mt-20">
                        <p>Belum ada data transaksi untuk ditampilkan :(
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
