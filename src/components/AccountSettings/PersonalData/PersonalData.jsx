import EditField from "../EditField/EditField";
import userIcon from '../../../icons/header/user.svg';
import callIcon from '../../../icons/account/call.svg';
import homeIcon from '../../../icons/account/home.svg';
import directIcon from '../../../icons/account/direct.svg';
import keyIcon from '../../../icons/account/key.svg';
import signpostIcon from '../../../icons/account/signpost.svg';

const PersonalData = () => {
  return (
    <div className="personal-data">
        <h3>Identification</h3>
        <p>Verify your identity</p>
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
            icon={directIcon}
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
