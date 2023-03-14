import React from 'react'

const Cards = ({ item, handleClick, }) => {

    const { title, price, img } = item;

    return (
        <div class='card' style={{ backgroundColor: 'cadetblue', border: '2px solid #c3c6ce'}}>
            <div style={{ height: 282, width: 190, display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10}}>
                <div style={{ backgroundColor: 'white', height: '60%', padding: 10 }}>
                    <img src={img} alt='products' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: 10, display: 'flex', flexDirection: 'column', padding: 8}}>
                    <p>{title}</p>
                    <p>RM {price}</p>
                </div>
                <button class="btn btn-primary" onClick={()=>handleClick(item)} style={{ fontSize: 10 }}>Add to Cart</button>
            </div>
        </div>

    )
}

export default Cards
