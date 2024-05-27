export default function Title({title}){
      return(
            <>
            <div className="section-title">
                  <div className="title">{title}</div>
                  <div className="title-button"><a href="">View all</a></div>
            </div>
            <div className="horizontal-line"></div>
            </>
      );
}