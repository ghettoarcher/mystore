import './signup-field.css';

const SignUpField = () =>{
      return(
            <div className="signup-field">
                  <div className="footer-column-item semi-bold">Sign up for News and updates</div>
                  <div className="footer-column-input"><img src="src/icons/footer/user.svg" alt="" /><input type="text" placeholder="E-mail Address"/><img src="src/icons/footer/arrow-right.png" alt="" /></div>
            </div>
            
      )
}

export default SignUpField;