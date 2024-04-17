import SaleItems from './SaleItems';

export default function Sale(){
      const saleData = [
            {
                  discount: '-50%',
                  img: '/src/img/sale/mouse.png',
                  name: 'Logitech G502 Gaming Mouse',
                  oldPrice: '$49.00',
                  newPrice: '$34.00',
                  id:1,
            },
            {
                  discount: '-50%',
                  img: '/src/img/sale/keyboard.png',
                  name: 'Logitech G502 Gaming Mouse',
                  oldPrice: '$38.00',
                  newPrice: '$19.00',
                  id:2,
            },
            {
                  discount: '-50%',
                  img: '/src/img/sale/watch.png',
                  name: 'Logitech G502 Gaming Mouse',
                  oldPrice: '$38.00',
                  newPrice: '$19.00',
                  id:3,
            },
            {
                  discount: '-50%',
                  img: '/src/img/sale/laptop.png',
                  name: 'Logitech G502 Gaming Mouse',
                  oldPrice: '$38.00',
                  newPrice: '$19.00',
                  id:4,
            },

      ]

      return(
            <div className="sale">
                  <div className="container">
                  <div className="sale-wrapper" >
                  <div className="sale-text">
                        <div className="sale-title">Products On Sale</div>
                        <div className="sale-subtitle">Shop Now!</div>
                        <div className="sale-button">View all</div>
                  </div>
                  <div className="sale-items">
                        <SaleItems data = {saleData}/>
                  </div>
                  <div className="slider">
                        <div className="arrow-left"><img src="/src/icons/arrow-cirle-left.png" alt="" /></div>
                        <div className="arrow-right"><img src="/src/icon/arrow-circle-right.png" alt="" /></div>
                  </div>
            </div>
                  </div>
            </div>
            

      )
}