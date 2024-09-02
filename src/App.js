import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

//  App component that manages the state of the packing list and coordinates the main components.
//  Handles adding, deleting, toggling packed status, and clearing the list of items.
export default function App() {
  const [items, setItems] = useState([]);

  // Add a new item to the packing list
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Delete an item from the packing list by its ID
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Clear all items from the packing list after user confirmation
  function handleClearList() {
    const confirmed = window.alert("Are you sure want to delete all items?");
    if (confirmed) setItems([]);
  }

  // Toggle the packed status of an item by its ID
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
