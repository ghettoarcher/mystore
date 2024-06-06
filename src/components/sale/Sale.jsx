import SaleItems from './SaleItems';

export default function Sale(){
      const saleData = [
            {
                  discount: '-50%',
                  img: '/src/img/sale/logitech-g502.svg',
                  name: 'Logitech G502 Gaming Mouse',
                  oldPrice: '$49.00',
                  newPrice: '$34.00',
                  id:1,
            },
            {
                  discount: '-50%',
                  img: '/src/img/sale/NPET.svg',
                  name: 'Logitech G502 Gaming Mouse',
                  oldPrice: '$38.00',
                  newPrice: '$19.00',
                  id:2,
            },
            {
                  discount: '-50%',
                  img: '/src/img/sale/apple-watch7.svg',
                  name: 'Logitech G502 Gaming Mouse',
                  oldPrice: '$38.00',
                  newPrice: '$19.00',
                  id:3,
            },
            {
                  discount: '-50%',
                  img: '/src/img/sale/macbookairm2.svg',
                  name: 'Logitech G502 Gaming Mouse',
                  oldPrice: '$38.00',
                  newPrice: '$19.00',
                  id:4,
            },


      ]

      return(
            <div className="sale">
                  <div className="container">
                  <div className="sale-wrapper position-relative d-flex flex-row justify-content-between align-items-around " >
                  <div className="sale-text d-flex flex-column justify-content-evenly">
                        <div className="sale-title"><a href="">Products On Sale</a></div>
                        <div className="sale-subtitle"><a href="">Shop Now!</a></div>
                        <div className="sale-button"><a href="">View all</a></div>
                  </div>
                  <div className="sale-items d-flex flex-row px-5 align-items-center gap-4 rounded-2 ">
                        <SaleItems data = {saleData}/>
                  </div>
                  <div className="arrows position-absolute end-0 bottom-0 p-2">
                        <img src="src/assets/icons/arrow-circle-left.svg" alt="" />
                        <img src="src/assets/icons/arrow-circle-right.svg" alt="" />
                  </div>

            </div>
                  </div>
            </div>
            

      )
}