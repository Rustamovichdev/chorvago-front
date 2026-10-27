
export default function SearchBar() {
  return (
    <div className="flex flex-1 overflow-hidden rounded-lg border border-gray-300">
      <input
        type="text"
        placeholder="Qidiruv: Masalan, Golshtin"
        className="flex-1 px-3 py-3 text-sm outline-none"
      />
      <button className="bg-green-800 px-4 text-sm font-medium text-white hover:bg-green-900">
        Izlash
      </button>
    </div>
  );
}