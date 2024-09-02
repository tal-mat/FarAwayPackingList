//  Item component that displays a single item with its description, quantity, and packed status.
//  Provides controls to toggle the packed status and delete the item.
export default function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li>
      {/* Checkbox to toggle the packed status of the item */}
      <input
        type="checkbox"
        value={packed}
        onChange={() => onToggleItem(id)}
      ></input>

      {/* Display item description and quantity, with strikethrough if packed */}
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>

      {/* Button to delete the item */}
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
