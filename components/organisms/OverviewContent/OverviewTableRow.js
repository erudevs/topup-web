import PropTypes from "prop-types";
import cx from "classnames";
import Link from "next/link";
import { formatNumber } from "../../../utils";

export default function OverviewTableRow({
  className, itemImage, itemName, itemCategory, itemAmount, itemTotal, itemStatus, itemDetail,
}) {
  const statusClass = cx({
    "float-start icon-status": true,
    pending: itemStatus === "pending",
    failed: itemStatus === "failed",
    success: itemStatus === "success",
  });

  return (
    <tr className={className}>
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={itemImage === "" ? "/img/game-placeholder.jpg" : itemImage}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0 text-capitalize">
            {itemName}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0 text-capitalize">{itemCategory}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{itemAmount}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{formatNumber.format(itemTotal)}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative text-capitalize">
            {itemStatus}
          </p>
        </div>
      </td>
      {itemDetail && (
        <td>
          <Link href="/member/transactions/detail">
            <a
              className="btn btn-status rounded-pill text-sm"
            >
              Details
            </a>
          </Link>
        </td>
      )}
    </tr>
  );
}

OverviewTableRow.propTypes = {
  className: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemCategory: PropTypes.string.isRequired,
  itemAmount: PropTypes.string.isRequired,
  itemTotal: PropTypes.string.isRequired,
  itemStatus: PropTypes.string.isRequired,
  itemDetail: PropTypes.bool,
};

OverviewTableRow.defaultProps = {
  itemDetail: false,
};
