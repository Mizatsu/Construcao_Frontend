import React, { useState } from 'react';
import Container from '../components/Container'
import './Items.css'

const Items = () => {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]); 

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem.trim()]); 
            setNewItem('');
        }
    };

    const handleRemoveItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <Container>
            <h1>Lista de Itens</h1>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Adicionar novo item"
            />
            <button onClick={handleAddItem}>Adicionar item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} 
                        <button onClick={() => handleRemoveItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Items;
