import AccountSettingsTitle from "../AccountSettingsTitle";
import EditField from '../EditField/EditField';

const Discounts = () => {
      return(
            <>

            <AccountSettingsTitle title={'Discounts & Voucher'} subtitle={'Add discount code to apply a discount in your purchase'}/>
            <section className="discounts">
                  <EditField rightIcon={'/src/assets/icons/eye.svg'} placeholder={'label'}></EditField>
                  <div className="d-flex flex-row gap-1 pt-2">
                  <p className="text-secondary fw-light">Where can I find the discount code ?</p> <img src="/src/assets/icons/arrow-down.svg" alt="" />
                  </div>
            </section>

            </>
      )
}

export default Discounts;