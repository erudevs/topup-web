import jwtDecode from "jwt-decode";
import Sidebar from "../../components/organisms/Sidebar";
import OverviewContent from "../../components/organisms/OverviewContent";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <OverviewContent />
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
