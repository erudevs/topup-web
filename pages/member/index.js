import Sidebar from "../../components/organisms/Sidebar";
import MemberOverview from "../../components/organisms/MemberOverview";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <MemberOverview />
    </section>
  );
}
