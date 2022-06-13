import TableRowTransaction from "./TableRowTransaction";

export default function OverviewTransaction() {
  return (
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
            <TableRowTransaction
              className="align-middle"
              itemImage="overview-1"
              itemName="Mobile Legends: The New Battle 2021"
              itemCategory="Mobile"
              itemAmount="200"
              itemTotal="290.000"
              itemStatus="Pending"
            />
            <TableRowTransaction
              className="align-middle text-center"
              itemImage="overview-2"
              itemName="Call of Duty: Modern Warfare"
              itemCategory="Desktop"
              itemAmount="550"
              itemTotal="740.000"
              itemStatus="Success"
            />
            <TableRowTransaction
              className="align-middle text-center"
              itemImage="overview-3"
              itemName="Clash of Clans"
              itemCategory="Mobile"
              itemAmount="100"
              itemTotal="120.000"
              itemStatus="Failed"
            />
            <TableRowTransaction
              className="align-middle text-center"
              itemImage="overview-4"
              itemName="The Royal Game"
              itemCategory="Mobile"
              itemAmount="225"
              itemTotal="200.000"
              itemStatus="Pending"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
