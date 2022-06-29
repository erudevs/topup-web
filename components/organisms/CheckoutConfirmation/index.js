import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { setCheckout } from "../../../services/playerService";

export default function CheckoutConfirmation() {
  const router = useRouter();
  const [checkBox, setCheckBox] = useState(false);

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem("data-item");
    const dataTopupLocal = localStorage.getItem("data-topup");

    const dataItem = JSON.parse(dataItemLocal);
    const dataTopup = JSON.parse(dataTopupLocal);

    if (!checkBox) {
      toast.error("Pastikan anda telah melakukan pembayaran!");
      return;
    }

    const data = {
      voucher: dataItem._id,
      nominal: dataTopup.nominalItem._id,
      payment: dataTopup.paymentItem.payment._id,
      bank: dataTopup.paymentItem.bank._id,
      name: dataTopup.bankAccountName,
      userAccount: dataTopup.verifyID,
    };

    const result = await setCheckout(data);
    if (result.error) {
      toast.error("Anda harus login untuk melakukan checkout");
    } else {
      toast.success("Checkout berhasil, pesanan Anda akan diproses");
      router.push("/complete-checkout");
    }
  };

  return (
    <>
      <label htmlFor="checkbox" className="checkbox-label text-lg color-palette-1">
        Konfirmasi pembayaran
        <input type="checkbox" id="checkbox" checked={checkBox} onChange={() => setCheckBox(!checkBox)} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
