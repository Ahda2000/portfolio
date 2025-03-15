export function Switch({ checked, onCheckedChange }) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="hidden"
      />
      <div className="w-10 h-5 bg-gray-300 rounded-full relative">
        <div
          className={`absolute w-4 h-4 bg-white rounded-full top-1 transition ${
            checked ? "right-1 bg-green-500" : "left-1"
          }`}
        ></div>
      </div>
    </label>
  );
}
