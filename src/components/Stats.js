// Stats component that shows the total items, packed items, and packing percentage.
// Displays a message if the list is empty.
export default function Stats({ items }) {
  // Display a message when there are no items in the list
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `
        💼 You have ${numItems} items on your list, and you already packed 
        ${numPacked} ${percentage}%.`}
      </em>
    </footer>
  );
}
