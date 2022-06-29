import { useEffect, useState } from "react";
import { formatNumber } from "../../../utils";

export default function CheckoutDetail() {
  const [dataTopup, setDataTopup] = useState({
    verifyID: "",
    nominalItem: {
      price: 0,
      coinQty: 0,
      coinName: "",
      _id: "",
    },
    paymentItem: {
      payment: {
        _id: "",
        paymentType: "",
      },
      bank: {
        _id: "",
        bankName: "",
        name: "",
        accountNumb: "",
      },
    },
    bankAccountName: "",
  });

  const itemPrice = dataTopup.nominalItem.price;
  const tax = +(10 / 100) * +itemPrice;
  const totalPrice = +itemPrice + +tax;

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-topup");
    const dataTopupLocal = JSON.parse(dataFromLocal);
    setDataTopup(dataTopupLocal);
  }, []);
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID
          <span className="purchase-details">{dataTopup.verifyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID
          <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item
          <span className="purchase-details">{dataTopup.nominalItem.coinQty} {dataTopup.nominalItem.coinName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price
          <span className="purchase-details">{formatNumber.format(itemPrice)}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%)
          <span className="purchase-details">{formatNumber.format(tax)}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total
          <span className="purchase-details color-palette-4">{formatNumber.format(totalPrice)}</span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name
          <span className="purchase-details">{dataTopup.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type
          <span className="payment-details">{dataTopup.paymentItem.payment.paymentType}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name
          <span className="payment-details">{dataTopup.paymentItem.bank.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name
          <span className="payment-details">{dataTopup.paymentItem.bank.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number
          <span className="payment-details">{dataTopup.paymentItem.bank.accountNumb}</span>
        </p>
      </div>
    </>
  );
}
