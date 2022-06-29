import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAPIMemberOverview } from "../../../services/playerService";
import OverviewTableRow from "./OverviewTableRow";
import OverviewTopUpCategory from "./OverviewTopUpCategory";

export default function index() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);
  const getMemberOverview = useCallback(async () => {
    const result = await getAPIMemberOverview();
    if (result.error) {
      toast.error(result.message);
    } else {
      console.log(result);
      setCount(result.data.count);
      setData(result.data.history);
    }
  }, [getAPIMemberOverview]);

  useEffect(() => {
    getMemberOverview();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((item) => (
                <OverviewTopUpCategory key={item._id} itemIcon={`${item.name.toLowerCase()}-game-icon`} itemSpentTotal={item.value}>
                  Game <br /> {item.name}
                </OverviewTopUpCategory>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <OverviewTableRow
                    key={item._id}
                    className="align-middle"
                    itemImage={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                    itemName={item.historyVoucherTopup.gameName}
                    itemCategory={item.category.name}
                    itemAmount={`${item.historyVoucherTopup.coinQty} ${item.historyVoucherTopup.coinName}`}
                    itemTotal={item.value}
                    itemStatus={item.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
