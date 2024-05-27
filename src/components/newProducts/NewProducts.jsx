import Title from '../title/Title';
import NewProductsItems from './NewProductsItems';

export default function NewProducts({data, title}){
    
      return(
            <section className="new-products pb-5">
                  <div className="container">
                  <Title title={title}/>
                  <NewProductsItems data = {data} />

                  </div>
            </section>
      )
}