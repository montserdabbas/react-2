import React, { useState, useEffect } from 'react'
import style from "./Product.module.css";
export default function Products() {

    const [product, setproduct] = useState([]);

    const getproduct = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setproduct(data);
    }
    useEffect(() => {
        getproduct();

    }, []);


    return (
        <div className='container'>
            <div className='row g-3'>
                {product.map(product =>
                    <div className='col-lg-3'>
                        <div className='card'>
                            <h2 className={`${style.fontsize}`}>{product.title.split(' ').slice(0,3).join(' ')}</h2>
                            <img src={product.image}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
