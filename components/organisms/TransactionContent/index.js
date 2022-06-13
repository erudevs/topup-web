import TableRowTransaction from "../OverviewTransaction/TableRowTransaction";
import ButtonTab from "./ButtonTab";

export default function TransactionContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You&lsquo;ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab btnName="All Trx" active />
              <ButtonTab btnName="Success" />
              <ButtonTab btnName="Pending" />
              <ButtonTab btnName="Failed" />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                <TableRowTransaction
                  className="align-middle"
                  itemImage="overview-1"
                  itemName="Mobile Legends: The New Battle 2021"
                  itemCategory="Mobile"
                  itemAmount="200"
                  itemTotal="290.000"
                  itemStatus="Pending"
                  itemDetail
                />
                <TableRowTransaction
                  className="align-middle"
                  itemImage="overview-2"
                  itemName="Call of Duty: Modern Warfare"
                  itemCategory="Desktop"
                  itemAmount="550"
                  itemTotal="740.000"
                  itemStatus="Success"
                  itemDetail
                />
                <TableRowTransaction
                  className="align-middle"
                  itemImage="overview-3"
                  itemName="Clash of Clans"
                  itemCategory="Mobile"
                  itemAmount="100"
                  itemTotal="120.000"
                  itemStatus="Failed"
                  itemDetail
                />
                <TableRowTransaction
                  className="align-middle"
                  itemImage="overview-4"
                  itemName="The Royal Game"
                  itemCategory="Mobile"
                  itemAmount="225"
                  itemTotal="200.000"
                  itemStatus="Pending"
                  itemDetail
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
