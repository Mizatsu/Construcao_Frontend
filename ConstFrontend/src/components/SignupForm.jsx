import React, { useState } from 'react';
import './Signupform.css'

const SignupForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            alert('Formulário enviado com sucesso.');
            setFormData({ name: '', email: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red', }}>{errors.email}</p>}
            </div>
            <div className='button-container'>
                <button type="submit">Confirmar</button>
            </div>
        </form>
    );
};

export default SignupForm;