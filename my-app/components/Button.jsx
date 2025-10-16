export default function Button({
  text,
  bgColor = "#235ee4",
  textColor = "white",
  icon,
  onClick,
}) {
  return (
    <button
      className={`rounded-md flex items-center px-3 py-2 shadow-md hover:opacity-90 transition cursor-pointer text-sm justify-center gap-1`}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {icon && <span className="text-md">{icon}</span>}
      <span>{text}</span>
    </button>
  );
}
