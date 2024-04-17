export default function Title({name}){
      return(
            <>
            <div className="section-title">
                  <div className="title">{name}</div>
                  <div className="title-button">View all</div>
            </div>
            <div className="horizontal-line"></div>
            </>
      );
}