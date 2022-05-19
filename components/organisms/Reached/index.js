import ReachItem from "../../molecules/ReachItem";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachItem bigText="290M+" smallText="Players Top Up" />
          <ReachItem bigText="12.500" smallText="Games Available" />
          <ReachItem bigText="99,9%" smallText="Happy Players" />
          <ReachItem bigText="4.7" smallText="Rating Worldwide" lastItem />
        </div>
      </div>
    </section>
  );
}
