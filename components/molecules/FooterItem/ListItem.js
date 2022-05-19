import Link from 'next/link';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  const { listTitle } = props;
  return (
    <li className="mb-6">
      <Link href="#">
        <a className="text-lg color-palette-1 text-decoration-none">
          {listTitle}
        </a>
      </Link>
    </li>
  );
}

ListItem.propTypes = {
  listTitle: PropTypes.string,
};

ListItem.defaultProps = {
  listTitle: 'List Title',
};
