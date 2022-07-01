import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar />
      <TransactionContent />
    </section>
  );
}

export async function getServerSideProps({ req }) {
  const { tkn } = req.cookies;

  if (!tkn) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
