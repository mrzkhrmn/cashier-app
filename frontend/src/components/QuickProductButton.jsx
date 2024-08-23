export const QuickProductButton = ({ product, onAddQuickProduct }) => {
  return (
    <button
      onClick={onAddQuickProduct}
      className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200"
    >
      <p>{product.title}</p>
      <p>424225</p>
    </button>
  );
};
