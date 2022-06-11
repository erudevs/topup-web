import PropTypes from "prop-types";

export default function TransactionBodyItem({
  className, itemImage, itemName, itemCategory, itemAmount, itemTotal, itemStatus,
}) {
  const getStatus = (status) => {
    switch (status) {
      case "Pending":
        return "pending";
      case "Failed":
        return "failed";
      case "Success":
        return "success";
      default:
        return "pending";
    }
  };

  return (
    <tr className={`${className}`}>
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${itemImage}.png`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {itemName}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{itemCategory}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{itemAmount} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">Rp {itemTotal}</p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${getStatus(itemStatus)}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {itemStatus}
          </p>
        </div>
      </td>
    </tr>
  );
}

TransactionBodyItem.propTypes = {
  className: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemCategory: PropTypes.string.isRequired,
  itemAmount: PropTypes.string.isRequired,
  itemTotal: PropTypes.string.isRequired,
  itemStatus: PropTypes.string.isRequired,
};
