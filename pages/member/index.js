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
