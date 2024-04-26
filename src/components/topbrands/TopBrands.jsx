import Title from '/src/components/title/Title';

export default function TopBrands(){
      return(
            <section className="top-brands">
                  <div className="container">
                        <Title name= {'Top Brands'}></Title>
                        <div className="top-brands-content">
                              <div className="top-brands-item"><img src="/src/img/topbrands/apple-logo.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/img/topbrands/sony-logo.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/img/topbrands/samsung-logo.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/img/topbrands/canon-logo.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item hide"><img src="/src/img/topbrands/huawei-logo.svg" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item hide"><img src="/src/img/topbrands/lenovo-logo.svg" alt="apple" className="top-brands-item" /></div>

                        </div>
                  </div>
            </section>


      );
}