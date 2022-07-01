import Link from "next/link";
import PropTypes from "prop-types";
import DetailRow from "./DetailRow";

export default function TransactionsDetailContent(props) {
  const { data } = props;

  const generateOrderNumber = `#GG${data._id.slice(0, 3)}`;

  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details {generateOrderNumber}</h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src={`${IMG}/${data.historyVoucherTopup.thumbnail}`}
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {data.historyVoucherTopup.gameName}
                    </p>
                    <p className="color-palette-2 m-0">Category: {data.historyVoucherTopup.category}</p>
                  </div>
                </div>
                <div>
                  <p className={`fw-medium text-center label ${data.status} m-0 rounded-pill text-capitalize`}>{data.status}</p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                <DetailRow label="Your Game ID" value={data.userAccount} />
                <DetailRow label="Order ID" value={generateOrderNumber} />
                <DetailRow label="Item" value={`${data.historyVoucherTopup.coinQty} ${data.historyVoucherTopup.coinName}`} />
                <DetailRow label="Price" value={data.historyVoucherTopup.price} />
                <DetailRow label="Tax (10%)" value={data.tax} />
                <DetailRow label="Total" value={data.value} className="color-palette-4" />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                <DetailRow label="Your Account Name" value={data.name} />
                <DetailRow label="Type" value={data.historyPayment.type} />
                <DetailRow label="Bank Name" value={data.historyPayment.bankName} />
                <DetailRow label="Bank Account Name" value={data.historyPayment.name} />
                <DetailRow label="Bank Number" value={data.historyPayment.accountNumb} />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <Link href="https://wa.me/6282116529263">
                  <a
                    className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                    target="_blank"
                    role="button"
                  >
                    WhatsApp ke Admin
                  </a>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

TransactionsDetailContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
};

TransactionsDetailContent.defaultProps = {
  data: {},
};
