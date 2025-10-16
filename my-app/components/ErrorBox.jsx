export default function Error({ message }) {
  return (
    <div className="p-4 text-red-600 text-center font-bold bg-red-200 rounded-md">
      {message}
    </div>
  );
}
