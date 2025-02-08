import { useState, useEffect } from "react";

function Wishlist() {
  const getStoredWishlist = () => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  };

  const [wishlist, setWishlist] = useState(getStoredWishlist);
  const [item, setItem] = useState("");

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addItem = () => {
    if (!item) return;
    setWishlist([...wishlist, item]);
    setItem("");
  };

  const deleteItem = (index) => {
    const updated = wishlist.filter((_, i) => i !== index);
    setWishlist(updated);
  };

  return (
    <div>
      <h2>🎁 Wishlist</h2>
      <input value={item} onChange={(e) => setItem(e.target.value)} placeholder="Enter wishlist item" />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {wishlist.map((wish, index) => (
          <li key={index}>
            {wish} <button onClick={() => deleteItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
