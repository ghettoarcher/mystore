import EditField from '../EditField/EditField'
import visaIcon from '../../../icons/footer/visa.svg'
import mastercardIcon from '../../../icons/footer/mastercard.svg'
import americanexpressIcon from '../../../icons/footer/american-express.svg'
import paypalIcon from '../../../icons/footer/paypal.svg'
const Payments = () => {
  return (
    <div className="personal-data">
          <h3>Cards</h3>
          <p>Manage payment methods</p>   
          <div className="edit-field-wrapper nowrap">
            <div className="div">
              <EditField title={'Full name'}  placeholder={'Credit or Debit card'} /> 
              <img src={visaIcon} alt="" />
              <img src={mastercardIcon} alt="" />
              <img src={americanexpressIcon} alt="" />
              </div>
          <div className="div">
            <EditField title={'Full name'}  placeholder={'Credit or Debit card'} />
            <img src={paypalIcon} alt="" />
          </div> 
          <EditField title={'Phone number'} placeholder={'Paypal'}/>
          <h3>Instalments</h3>
          <div className='wrapper'><p className='blue'>Manage your instalments</p><img src="/src/icons/account/arrow-right.svg" alt="arrow" /></div>
          </div> 


</div>
  );
};

export default Payments;