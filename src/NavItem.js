import { Link } from "react-router-dom";

export default function NavItem(props) {
  const { bgColor, label, href } = props;


  return (
    <Link
      to={href}
      className={`${bgColor} uppercase h-full transition duration-300 px-1`}
    >
      {label}
    </Link>
  );
}
