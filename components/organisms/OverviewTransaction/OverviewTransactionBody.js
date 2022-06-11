import TransactionBodyItem from "./TransactionBodyItem";

export default function OverviewTransactionBody() {
  return (
    <tbody>
      <TransactionBodyItem
        className="align-middle"
        itemImage="overview-1"
        itemName="Mobile Legends: The New Battle 2021"
        itemCategory="Mobile"
        itemAmount="200"
        itemTotal="290.000"
        itemStatus="Pending"
      />
      <TransactionBodyItem
        className="align-middle text-center"
        itemImage="overview-2"
        itemName="Call of Duty: Modern Warfare"
        itemCategory="Desktop"
        itemAmount="550"
        itemTotal="740.000"
        itemStatus="Success"
      />
      <TransactionBodyItem
        className="align-middle text-center"
        itemImage="overview-3"
        itemName="Clash of Clans"
        itemCategory="Mobile"
        itemAmount="100"
        itemTotal="120.000"
        itemStatus="Failed"
      />
      <TransactionBodyItem
        className="align-middle text-center"
        itemImage="overview-4"
        itemName="The Royal Game"
        itemCategory="Mobile"
        itemAmount="225"
        itemTotal="200.000"
        itemStatus="Pending"
      />
    </tbody>
  );
}
