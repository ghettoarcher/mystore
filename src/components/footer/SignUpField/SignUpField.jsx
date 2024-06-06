import './signup-field.css';

const SignUpField = () =>{
      return(
            <div className="signup-field">
                  <div className="footer-column-item semi-bold">Sign up for News and updates</div>
                  <div className="footer-column-input"><img src="src/assets/icons/user-white.svg" alt="" /><input type="text" placeholder="E-mail Address"/><img src="src/assets/icons/path-arrow-white.svg" alt="" /></div>
            </div>
            
      )
}

export default SignUpField;