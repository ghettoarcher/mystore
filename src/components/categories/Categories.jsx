const ProductList = ({ data }) => {
  return (
    <div >
      <div className="container">
      <div className='categories-wrapper'>
        {data.map(item => (
          <div className='categories-item' key={item.id}>
            <div className="categories-item-img"><a href="#"><img src={item.img} alt="item"/></a> </div>
            <div className="categories-item-name"><a href="#">{item.name}</a></div>
          </div>
        ))}
        
      </div>
      </div>

    </div>
  );
};

export default ProductList;
