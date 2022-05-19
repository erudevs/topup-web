import PropTypes from "prop-types";
import ListItem from "./ListItem";

export default function FooterItem(props) {
  // eslint-disable-next-line react/prop-types
  const { title, listArrayItems } = props;
  const arrayItems = [];
  arrayItems.push(listArrayItems);

  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">
        {title}
      </p>
      <ul className="list-unstyled">
        {arrayItems[0].map((item) => (
          <ListItem key={item.id} listTitle={item.name} />
        ))}
      </ul>
    </div>
  );
}

FooterItem.propTypes = {
  title: PropTypes.string,
};

FooterItem.defaultProps = {
  title: "Footer Item Title",
};
