
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/pro') 
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={{ padding: '16px' }}>
            <h1>List of Products</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px'
            }}>
                {products.map((product) => (
                    <div key={product.id} style={{
                        border: '1px solid #ddd',
                        padding: '16px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ margin: '0 0 8px', fontSize: '1.5em' }}>{product.name}</h2>
                        <p style={{ margin: '4px 0' }}>{product.description}</p>
                        <p style={{ margin: '4px 0' }}><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
