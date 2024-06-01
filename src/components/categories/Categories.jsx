const Categories = ({ data }) => {
  return (
    <div >
      <div className="container">
      <div className='categories-wrapper d-flex flex-row g-4 py-5 gap-4'>
        {data.map(item => (
          <div className='categories-item card' key={item.id}>
            <div className="card-body">
            <div className="card-img-top"><a href="#"><img className='py-2 text-decoration-none'src={item.img} alt="item"/></a> </div>
            <div className="categories-item-name card-text text-center fs-6 fw-light pb-2"><a href="#">{item.name}</a></div>
            </div>

          </div>
        ))}
        
      </div>
      </div>

    </div>
  );
};

export default Categories;
