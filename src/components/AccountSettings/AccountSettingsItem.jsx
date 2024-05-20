

const AccountSettingsItem = ({img,text,href}) =>{
      return(
            <>
            <div className="account-settings-item">
                  <img src={img} alt="" />
                  <a href={href} className="account-text">{text}</a>
                  
            </div>
            </>
      )
}

export default AccountSettingsItem;