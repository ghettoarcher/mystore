import AccountSettingsTitle from "../AccountSettingsTitle";
import EditField from '../EditField/EditField';

const Security = () => {
      return(
            <>

            <AccountSettingsTitle title={'Security settings'} subtitle={'Change password and phone number'}/>
            <section className="security d-flex gap-4">
                  <EditField icon={'/src/assets/icons/key.svg'} rightIcon={'/src/assets/icons/edit.svg'} placeholder={'Password'}></EditField>
                  <EditField icon={'/src/assets/icons/call-black.svg'} rightIcon={'/src/assets/icons/edit.svg'} placeholder={'Phone number'}></EditField>
            </section>

            </>
      )
}

export default Security;