import AccountSettingsTitle from "../AccountSettingsTitle";
import NotificationItem from './NotificationItem';

const Notification = () => {
      return(
            <>

            <AccountSettingsTitle title={'Notification'} subtitle={'Manage your notification settings'}/>
            <section className="notification d-flex gap-4">
                <div className="notification-items-wrapper d-flex flex-row flex-wrap gap-4">
                    <NotificationItem icon={"/src/assets/icons/envelope.svg"} title={'Emails'} subtitle={'We write emails to let you know what s important, like: new order, confirmations '}/>
                    <NotificationItem icon={"/src/assets/icons/truck.svg"} title={'Order Delivered'} subtitle={'You will be noticed once the order is delivered'}/>
                    <NotificationItem icon={"/src/assets/icons/mail-black.svg"} title={'Push to your Device'} subtitle={'Receive notifications about your order status, promotions and other updates'}/>
                    {/*<NotificationItem icon={"/src/assets/icons/mail-black.svg"} title={'Push to your Device'} subtitle={'Receive notifications about your order status, promotions and other updates'}/>*/}
                

                </div>
     
            </section>

            </>
      )
}

export default Notification;