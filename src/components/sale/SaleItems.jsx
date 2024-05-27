const SaleItems = ({ data }) => {
  return (
      <>
        {data.map(item => (
          <div className='sale-item position-relative rounded-2' key={item.id}>
            <div className="sale-item-img"><img src={item.img} alt="" /></div>
            <div className="sale-item-name fw-light">{item.name}</div>
            <div className="sale-item-discount position-absolute fw-light rounded-2">{item.discount}</div>
            <div className="sale-item-price d-flex flex-row justify-content-between align-items-end pt-3">
                  <div className="sale-item-price-old text-decoration-line-through fw-normal fs-7">{item.oldPrice}</div>
                  <div className="sale-item-price-new fw-light fs-6">{item.newPrice}</div>
            </div>
          </div>
        ))}
        
      </>
  );
};

export default SaleItems;
