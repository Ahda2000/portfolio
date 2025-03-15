export function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-lg w-full"
    />
  );
}
