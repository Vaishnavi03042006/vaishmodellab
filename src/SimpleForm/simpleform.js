import React, { useRef, useState } from 'react';

const SimpleForm = () => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleFocus = () => {
       
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setMessage(''); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (!inputValue.trim()) {
            setMessage('Input cannot be empty');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: inputValue }),
            });

            if (!response.ok) {
                throw new Error('Server error');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);

            
            setMessage('Form submitted successfully!');
            setInputValue(''); 
        } catch (error) {
            console.error(error);
            setMessage('Failed to connect to the server');
        }
    };

    return (
        <div>
            <h1>Simple Form with API Validation</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSubmit(e);
                    }}
                />
                <button type="button" onClick={handleFocus}>Focus Input</button>
                <button type="submit">Submit</button>
            </form>
            {message && (
                <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default SimpleForm;

