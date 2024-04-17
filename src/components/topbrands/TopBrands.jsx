import Title from '/src/components/title/Title';

export default function TopBrands(){
      return(
            <section className="top-brands">
                  <div className="container">
                        <Title name= {'Top Brands'}></Title>
                        <div className="top-brands-content">
                              <div className="top-brands-item"><img src="/src/img/topbrands/apple-logo.png" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/img/topbrands/sony-logo.png" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/img/topbrands/samsung-logo.png" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/img/topbrands/canon-logo.png" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/img/topbrands/huawei-logo.png" alt="apple" className="top-brands-item" /></div>
                              <div className="top-brands-item"><img src="/src/img/topbrands/lenovo-logo.png" alt="apple" className="top-brands-item" /></div>

                        </div>
                  </div>
            </section>


      );
}