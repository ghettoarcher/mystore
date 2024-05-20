import AccountSettingsItem from '../AccountSettings/AccountSettingsItem';


const AccountSettings = () => {
      return(
            <>
            <div className="account-settings">
                  <div className="account-settings-content">
                        <AccountSettingsItem text= "Adnan Al-Ezari" img= {"src/icons/account/account-icon.svg"}/>
                        <AccountSettingsItem text= "Personal Data" img= {"src/icons/account/user-edit.svg"} href={"/account/personal-data"}/>
                        <AccountSettingsItem text= "Payments & Instalments" img= {"src/icons/account/dollar-circle.svg"}/>
                        <AccountSettingsItem text= "Orders" img= {"src/icons/account/bag.svg"}/>
                        <AccountSettingsItem text= "Wish list" img= {"src/icons/account/heart.svg"}/>
                        <AccountSettingsItem text= "Discounts" img= {"src/icons/account/gift.svg"}/>
                        <AccountSettingsItem text= "Security & access" img= {"src/icons/account/security-safe.svg"}/>
                        <AccountSettingsItem text= "Notification" img= {"src/icons/account/notification.svg"}/>
                        <AccountSettingsItem text= "Contact Us" img= {"src/icons/account/24-support.svg"}/>
                        <AccountSettingsItem text= "Log Out" img= {"src/icons/account/logout.svg"}/>
                  </div>
                  
            </div>
            </>
      )
}

export default AccountSettings;