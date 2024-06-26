import AccountSettingsTitle from "../AccountSettingsTitle";
import WishlistCard from './WishlistCards';

const wishlistData = [
    {
        img: '/src/assets/images/image.svg',
        title: 'APPLE iPad Pro 11” M2 Chip',
    },
    {
        img: '/src/assets/images/image-1.svg',
        title: 'Samsung Galaxy Z Flip 5',
    },
    {
        img: '/src/assets/images/image-3.svg',
        title: 'Apple Watch Series 7 Aluminum',
    },
 
]

const Wishlist = () => {
      return(
            <>
            <div className="orders">
                  <AccountSettingsTitle title={'Wish list'} subtitle={'See your favorites list here'}/>
            </div>
            <section className="wishlist d-flex flex-row">

            <WishlistCard data= {wishlistData}/>
            </section>

            </>
      )
}

export default Wishlist;