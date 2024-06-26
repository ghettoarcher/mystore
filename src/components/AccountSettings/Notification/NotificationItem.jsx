

const NotificationItem = ({title,subtitle,icon}) => {
      return(
            <div className="notification-item px-2">
                        <div className="d-flex flex-row align-items-start">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row"><img src={icon} alt="" className="notification-item-icon pe-2"/>
                                <div className="notification-item-title fw-medium">{title}</div>
                            </div>
                            <div className="notification-item-subtitle fw-light">{subtitle}</div>

                        </div>
                        <img className="toggle-icon" src="/src/assets/icons/toggle-icon.svg" alt="" />
                        </div>
                    </div>
      )
}

export default NotificationItem;