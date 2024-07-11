export default function NewProductsItems({data}){
      return(
            <>
            <div className="newproducts-items d-flex f-row align-items-center justify-content-between gap-4 pt-2">
                  {data.map(item => {
                        return(
                              <div className="newproducts-item" key = {item.id}>
                                    <img src={item.img} alt="" className=""/>
                              <div className="horizontal"></div>
                              <div className="newproducts-item-name  fs-6 fw-light">{item.name}</div>
                              <div className="newproducts-item-info d-flex f-row justify-content-between">
                                <div className="newproducts-item-price fw-light">{item.price}</div>
                                <div className="newproducts-item-rating d-flex f-row align-items-center" ><img src="/src/assets/icons/star.svg" alt="" />{item.rating}</div>
                              </div>
                            </div> 
                        )

                  })}
            </div>
            </>
      );
}