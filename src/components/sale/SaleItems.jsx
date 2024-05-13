const SaleItems = ({ data }) => {
  return (
      <div className='sale-items-wrapper'>
        {data.map(item => (
          <div className='sale-item' key={item.id}>
            <div className="sale-item-img"><img src={item.img} alt="" /></div>
            <div className="sale-item-name">{item.name}</div>
            <div className="sale-item-discount">{item.discount}</div>
            <div className="sale-item-price">
                  <div className="sale-item-price-old">{item.oldPrice}</div>
                  <div className="sale-item-price-new">{item.newPrice}</div>
            </div>
          </div>
        ))}
        
      </div>
  );
};

export default SaleItems;
