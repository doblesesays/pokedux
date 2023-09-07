import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Icon onClick={onClick} />;
};

export default StarButton;
