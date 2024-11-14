import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/data')
            .then(response => setBooks(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); 

    return (
        <div>
            <h1>List of Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
