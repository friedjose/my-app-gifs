import { useState } from "react";

const ListGroup = ({ categories, onSelectCategory }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index) => {
    setSelectedIndex(index);
    onSelectCategory(categories[index]); 
  };

  return (
    <ul className="list-group">
      {categories.map((category, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={category}
          onClick={() => handleClick(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
