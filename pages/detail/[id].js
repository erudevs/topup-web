/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { useEffect } from "react";
import DetailTopUpForm from "../../components/organisms/DetailTopUpForm";
import DetailTopUpItem from "../../components/organisms/DetailTopUpItem";
import Layout from "../../components/organisms/Layout";
import { getAPIDetailVoucher, getAPIFeaturedGame } from "../../services/playerService";

export default function Detail({ dataItem, nominals, payments }) {
  const IMAGE_API = process.env.NEXT_PUBLIC_IMAGE;
  useEffect(() => {
    localStorage.setItem("data-item", JSON.stringify(dataItem));
  }, []);

  return (
    <Layout>
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <div className="row align-items-center">
                <div className="col-md-12 col-4">
                  <img
                    src={`${IMAGE_API}/${dataItem.thumbnail}`}
                    width="280"
                    height="380"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* Mobile: Game title */}
                <DetailTopUpItem data={dataItem} isMobile />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* Desktop: Game title */}
              <DetailTopUpItem data={dataItem} />
              <hr />
              <DetailTopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

Detail.propTypes = {
  dataItem: PropTypes.object,
  nominals: PropTypes.array,
  payments: PropTypes.array,
};

Detail.defaultProps = {
  dataItem: {},
  nominals: [],
  payments: [],
};

export async function getStaticPaths() {
  const result = await getAPIFeaturedGame();
  const { data } = result;

  const paths = data.map((item) => ({
    params: {
      id: item._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const result = await getAPIDetailVoucher(id);
  const { data } = result;

  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payments: data.payment,
    },
  };
}
