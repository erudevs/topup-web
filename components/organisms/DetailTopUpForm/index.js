/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

export default function DetailTopUpForm(props) {
  const router = useRouter();
  const { nominals, payments } = props;
  const [verifyID, setVerifyID] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});

  const onNominalItemClick = (data) => {
    setNominalItem(data);
  };

  const onPaymentItemClick = (payment, bank) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (verifyID === "" || bankAccountName === "" || nominalItem === {} || paymentItem === {}) {
      toast.error("Harap untuk mengisi semua data!");
      return;
    }

    const data = {
      verifyID,
      bankAccountName,
      nominalItem,
      paymentItem,
    };
    localStorage.setItem("data-topup", JSON.stringify(data));
    router.push("/checkout");
  };

  return (
    <>
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(e) => setVerifyID(e.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              key={nominal._id}
              id={nominal._id}
              coinName={nominal.coinName}
              coinQty={nominal.coinQty}
              price={nominal.price}
              onClick={() => onNominalItemClick(nominal)}
            />
          ))}
          <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) => payment.banks.map((bank) => (
              <PaymentItem
                key={bank._id}
                bankID={bank._id}
                paymentType={payment.paymentType}
                bankName={bank.bankName}
                onClick={() => onPaymentItemClick(payment, bank)}
              />
            )))}
            <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(e) => setBankAccountName(e.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </>
  );
}

DetailTopUpForm.propTypes = {
  nominals: PropTypes.arrayOf(PropTypes.object).isRequired,
  payments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
