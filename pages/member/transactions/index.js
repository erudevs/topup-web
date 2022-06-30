import jwtDecode from "jwt-decode";
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

  const decodedToken = Buffer.from(tkn, "base64").toString("ascii");
  const dataFromPayload = jwtDecode(decodedToken);
  const img = process.env.NEXT_PUBLIC_IMAGE;
  dataFromPayload.avatar = `${dataFromPayload.avatar === "" ? "/img/profile-placeholder.jpg" : `${img}/${dataFromPayload.avatar}`}`;

  return {
    props: {
      user: dataFromPayload,
    },
  };
}
