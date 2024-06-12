import './copyright.css';

const Copyright = () => {
      return(
            <div className="copyright">
            <div className="copyright-icon"><img className="copyright-icon" src="src/assets/icons/copyright.svg" alt="copyright"/><div className="copyright-icon-text">2023 Tech Heim.</div></div>
            
            <div className="copyright-content">
                  <div className="copyright-item"><a href="">cookie settings</a></div>
                  <div className="copyright-item"><a href="">Privacy Policy</a></div>
                  <div className="copyright-item"><a href="">Terms and Conditions</a></div>
                  <div className="copyright-item"><a href="">Imprint</a></div>
            </div>
      </div>
      )
}

export default Copyright;