

const EditField = ({title,icon,placeholder,rightIcon}) => {
      return(
            <div className="edit-field">
                              <div className="edit-field-title"><p>{title}</p><br/></div>
                              <div className="edit-field-content">
                              <img className="edit-field-icon" src={icon} alt="" />
                              <input type="text" placeholder={placeholder}  />
                              <img src={rightIcon} alt="" />
                              </div>
                        
                        </div>
      );
}

export default EditField;