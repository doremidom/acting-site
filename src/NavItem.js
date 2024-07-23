export default function NavItem(props) {
  const { onClick, bgColor, label, onHover } = props;

  return (
    <button
      onClick={() => onClick()}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover("")}
      className={`${bgColor} border-b border-black w-full uppercase bg-white/90 h-full duration-200 text-black text-center pr-4`}
    >
      {label}
    </button>
  );
}
