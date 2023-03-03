export default function NavItem(props) {
  const { onClick, bgColor, label, onHover } = props;

  return (
    <button
      onClick={() => onClick()}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover("")}
      className={`${bgColor} border-b border-black w-full uppercase bg-black/90 h-full duration-200 text-white text-center pr-4`}
    >
      {label}
    </button>
  );
}
