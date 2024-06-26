import EditField from '../EditField/EditField'
import visaIcon from '../../../assets/icons/visa.svg'
import mastercardIcon from '../../../assets/icons/mastercard.svg'
import americanexpressIcon from '../../../assets/icons/american-express.svg'
import paypalIcon from '../../../assets/icons/paypal.svg'
import AccountSettingsTitle from '../AccountSettingsTitle'
const Payments = () => {
  return (
    <div className="personal-data">
          <AccountSettingsTitle title={'Cards'} subtitle={'manage payment methods'}/>  
          <div className="edit-field-wrapper nowrap">
            <div className="edit-field-item">
              <EditField title={'Full name'}  placeholder={'Credit or Debit card'} rightIcon= {'/src/assets/icons/edit.svg'} /> 
              <img src={visaIcon} alt="" />
              <img src={mastercardIcon} alt="" />
              <img src={americanexpressIcon} alt="" />
            </div>
          <div className="edit-field-item">
            <EditField title={'Full name'}  placeholder={'Credit or Debit card'}  rightIcon= {'/src/assets/icons/edit.svg'}/>
            <img src={paypalIcon} alt="" />
          </div> 
          <h3 className='pt-4'>Instalments</h3>
          <div className='wrapper'><p className='blue'>Manage your instalments</p><img src="/src/assets/icons/arrow-right.svg" alt="arrow" /></div>
          </div> 


</div>
  );
};

export default Payments;