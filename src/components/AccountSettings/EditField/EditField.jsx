const EditField = ({title,icon,placeholder}) => {
      return(
            <div className="edit-field">
                              <div className="edit-field-title"><p>{title}</p><br/></div>
                              <div className="edit-field-content">
                              <img className="edit-field-icon" src={icon} alt="" />
                              <input type="text" placeholder={placeholder}  />
                              <img src="src/icons/account/edit.svg" alt="" />
                              </div>
                        
                        </div>
      );
}

export default EditField;