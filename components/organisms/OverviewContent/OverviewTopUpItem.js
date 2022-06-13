import Image from "next/image";
import PropTypes from "prop-types";

export default function OverviewTopUpItem(props) {
  const { itemIcon, children, itemSpentTotal } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/${itemIcon}.svg`} width={60} height={60} alt="Icon" />
          <p className="color-palette-1 mb-0 ms-12">
            {children}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">Rp {itemSpentTotal}</p>
        </div>
      </div>
    </div>
  );
}

OverviewTopUpItem.propTypes = {
  itemIcon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  itemSpentTotal: PropTypes.string.isRequired,
};
