import OverviewTransaction from "../OverviewTransaction";
import OverviewTopUp from "../OverviewTopUp";

export default function index() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <OverviewTopUp />
        <OverviewTransaction />
      </div>
    </main>
  );
}
