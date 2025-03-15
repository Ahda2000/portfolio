export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-forest-green text-white rounded-lg hover:bg-opacity-80 transition"
    >
      {children}
    </button>
  );
}
