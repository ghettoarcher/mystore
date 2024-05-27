export default function NewProductsItems({data}){
      return(
            <>
            <div className="newproducts-items d-flex f-row align-items-center justify-content-center gap-4 pt-2">
                  {data.map(item => {
                        return(
                              <div className="newproducts-item card p-3 " key = {item.id}>
                              <img src={item.img} alt="" className=""/>
                              <div className="horizontal my-3"></div>
                              <div className="newproducts-item-name card-title fs-6 fw-light mt-3">{item.name}</div>
                              <div className="newproducts-item-info d-flex f-row justify-content-between mt-4">
                                <div className="newproducts-item-price fw-light">{item.price}</div>
                                <div className="newproducts-item-rating d-flex f-row align-items-center" ><img src="/src/icons/new-products/star.svg" alt="" />{item.rating}</div>
                              </div>
                            </div> 
                        )

                  })}
            </div>
            </>
      );
}