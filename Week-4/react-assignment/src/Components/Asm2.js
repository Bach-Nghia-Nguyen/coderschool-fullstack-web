import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
  { id: "tomato", value: "🍅 tomato" },
  { id: "melon", value: "🍈 melon" },
  { id: "watermelon", value: "🍉 watermelon" },
  { id: "lemon", value: "🍋 lemon" },
  { id: "banana", value: "🍌 banana" },
  { id: "pineapple", value: "🍍 pineapple" },
  { id: "peach", value: "🍑 peach" },
  { id: "cherries", value: "🍒 cherries" },
  { id: "strawberry", value: "🍓 strawberry" },
  { id: "kiwi", value: "🥝 kiwi" },
  { id: "coconut", value: "🥥 coconut" },
  { id: "mango", value: "🥭 mango" },
];

const Asm2 = () => {
  const [myList, setMyList] = useState(allItems);
  // const [count, setCount] = useState(0);

  const addItem = () => {
    /** if (count < allItems.length) {
     *    setMyList([...myList, allItems[count]]);
     *    setCount(count + 1);
     *  }
     */
    // Missing item that is not in the list
    const newItem = allItems.find((item) => !myList.includes(item));
    console.log(newItem);
    if (newItem) {
      setMyList([...myList, newItem]);
    }
  };

  const removeItem = (toRemoveItem) => {
    console.log(toRemoveItem);
    setMyList(myList.filter((item) => item.id !== toRemoveItem.id));
  };

  return (
    <Container>
      <Button className="btn btn-info" onClick={addItem}>
        Add Item
      </Button>
      <ul>
        {myList.map((item, index) => (
          <li key={item.id}>
            <Button variant="outline-danger" onClick={() => removeItem(item)}>
              &times;
            </Button>
            <label htmlFor={`${item.id}-input`}>{item.value}</label>
            <input
              id={`${item.id}-input`}
              type="text"
              defaultValue={item.value}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Asm2;
