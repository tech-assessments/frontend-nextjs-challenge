export default function Loader({ text }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex flex-col items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin mb-4"></div>
      <span className="text-white font-medium text-lg">{text}</span>
    </div>
  );
}
