import React from 'react';

const ProductList = ({ data }) => {
  return (
    <div >
      <div className='categories-wrapper'>
        {data.map(item => (
          <div className='categories-item' key={item.id}>
            <div className="categories-item-img"><img src={item.img} alt="" /></div>
            <div className="categories-item-name">{item.name}</div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ProductList;
