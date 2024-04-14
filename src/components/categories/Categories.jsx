export default function Categories({data}){
      const itemList = map((item) => {
            return(
                  <div className="categories__item">
                        <div className="categories-item__img"><img src={data.img} alt="" /></div>
                        <div className="categories-item__title">{data.name}</div>
                  </div>
            )
      })
      return(
            <div className="categories-list">
                  
            </div>
      )
}