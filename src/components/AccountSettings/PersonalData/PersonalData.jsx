import EditField from "../EditField/EditField";
import userIcon from '../../../assets/icons/user-black.svg';
import callIcon from '../../../assets/icons/call-black.svg';
import homeIcon from '../../../assets/icons/home.svg';
import mailIcon from '../../../assets/icons/mail-black.svg';
import keyIcon from '../../../assets/icons/key.svg';
import signpostIcon from '../../../assets/icons/signpost.svg';
import  AccountSettingsTitle from '../AccountSettingsTitle';
const PersonalData = () => {
  return (
    <div className="personal-data">
        <AccountSettingsTitle title={'Identification'} subtitle={'Verify your identity'}/>
        <div className="edit-field-wrapper">
          <EditField
            title={'Full name'}
            icon={userIcon}
            placeholder={'Enter full name'}
          />
          <EditField
            title={'Phone number'}
            icon={callIcon}
            placeholder={'+1234567891'}
          />
          <EditField
            title={'Address'}
            icon={homeIcon}
            placeholder={'HubSpot, 25 First Street, Cambridge MA 02141'}
          />
          <EditField
            title={'E-mail Address'}
            icon={mailIcon}
            placeholder={'example@gmail.com'}
          />
          <EditField
            title={'Password'}
            icon={keyIcon}
            placeholder={'********'}
          />
          <EditField
            title={'Postal code'}
            icon={signpostIcon}
            placeholder={'Postal code'}
          />
        </div>

    </div>
  );
}

export default PersonalData;
