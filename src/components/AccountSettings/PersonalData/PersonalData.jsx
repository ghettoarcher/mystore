import EditField from "../EditField/EditField";

const PersonalData = () => {
      return(
            <div className="personal-data">
                  <div className="personal-data-content">
                        <h3>Identification</h3>
                        <p>Verify your identity</p>   
                        <div className="edit-field-wrapper">
                        <EditField title={'Full name'} icon={'src/icons/header/user.svg'} placeholder={'Enter full name'}/>
                        <EditField title={'Phone number'} icon={'src/icons/account/call.svg'} placeholder={'+1234567891'}/>
                        <EditField title={'Address'} icon={'src/icons/account/home.svg'} placeholder={'HubSpot, 25 First Street, Cambridge MA 02141'}/>
                        <EditField title={'E-mail Address'} icon={'src/icons/account/direct.svg'} placeholder={'example@gmail.com'}/>
                        <EditField title={'Password'} icon={'src/icons/account/key.svg'} placeholder={'********'}/>
                        <EditField title={'Postal code'} icon={'src/icons/account/signpost.svg'} placeholder={'Postal code'}/>
                        </div> 

                  </div>
            </div>
      )
}

export default PersonalData;