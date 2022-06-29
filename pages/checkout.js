import Image from "next/image";
import jwtDecode from "jwt-decode";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";

export default function Checkout() {
  // eslint-disable-next-line react/prop-types
  // const { user } = props;
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="Logo" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
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
