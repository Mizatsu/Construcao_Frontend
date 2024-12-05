import React, { useState } from 'react';

const ItemList = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removeItem(index)}>Remover</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addItem(`Item ${items.length + 1}`)}>Adicionar Item</button>
        </div>
    );
};

export default ItemList;
