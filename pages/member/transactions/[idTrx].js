import PropTypes from "prop-types";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionsDetailContent from "../../../components/organisms/TransactionsDetailContent";
import { getAPIMemberTransactionDetail } from "../../../services/memberService";

export default function TransactionDetail({ transactionDetail }) {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar />
      <TransactionsDetailContent data={transactionDetail} />
    </section>
  );
}

TransactionDetail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  transactionDetail: PropTypes.object,
};

TransactionDetail.defaultProps = {
  transactionDetail: {},
};

export async function getServerSideProps({ req, params }) {
  const { idTrx } = params;
  const { tkn } = req.cookies;

  if (!tkn) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const decodedToken = Buffer.from(tkn, "base64").toString("ascii");
  const response = await getAPIMemberTransactionDetail(decodedToken, idTrx);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
