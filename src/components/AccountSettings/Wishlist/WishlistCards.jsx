
const WishlistCard = ({data}) => {
      return(
        <div className="d-flex flex-row gap-4 flex-wrap">
        {data.map(item =>{
            return(   
                    <div className="wishlist-card card">
                    <div className="card-img-top text-center p-2"><img src={item.img} alt="" /></div>
                    <div className="card-body">
                    <div className="horizontal mb-3"></div>
                    <div className="card-title fs-6 flex-nowrap">{item.title}</div>

                    <div className="addtocart d-flex flex-row justify-content-between">
                        <div className="addtocart border border-primary rounded-2 d-flex flex-row p-2">
                        <img src="/src/assets/icons/shopping-cart.svg" alt="add to cart" />
                        <p>Add to cart</p>
                        </div>
                        <img src="/src/assets/icons/trash.svg" alt="" />
                    </div>  

                    </div>
                    </div>
            )
        })}
        </div>
      )
}

export default WishlistCard;