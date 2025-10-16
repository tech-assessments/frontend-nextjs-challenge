export default function CustomTable({
  columns,
  data = [],
  onRowClick,
  className,
}) {
  return (
    <div className={`overflow-x-auto shadow-md rounded-lg ${className || ""}`}>
      <table className="min-w-full border-collapse rounded-lg">
        <thead>
          <tr className="bg-[#4a55a2] text-white text-left text-sm rounded-t-lg">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 py-2 border-b border-gray-500 text-center"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.length > 0 ? (
            data.map((item, rowIdx) => (
              <tr
                key={rowIdx}
                className="hover:bg-[#4a55a2] cursor-pointer transition-all rounded-md"
                onClick={() => onRowClick && onRowClick(item)}
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-4 py-3 text-sm">
                    {col.render ? col.render(item) : item[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center p-4 text-gray-500 text-sm"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
