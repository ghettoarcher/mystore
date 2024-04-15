export default function NewProductsItems({data}){
      return(
            <>
            <div className="newproducts-items">
                  {data.map(item => {
                        return(
                              <div className="newproducts-item">
                              <div className="newproducts-item-img"><img src={item.img} alt="" /></div>
                              <div className="horizontal"></div>
                              <div className="newproducts-item-name">{item.name}</div>
                              <div className="newproducts-item-info">
                                <div className="newproducts-item-price">{item.price}</div>
                                <div className="newproducts-item-rating"><img src="/src/icons/star.png" alt="" />{item.rating}</div>
                              </div>
                            </div> 
                        )

                  })}
            </div>
            </>
      );
}