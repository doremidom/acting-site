export default function NavItem(props) {
  const { onClick, bgColor, label, onHover } = props;

  return (
    <button
      onClick={() => onClick()}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover("")}
      className={`${bgColor} border-b border-black w-full uppercase bg-black/90 pl-4 h-full duration-200 font-sans text-white text-right pr-4 `}
    >
      {label}
    </button>
  );
}
