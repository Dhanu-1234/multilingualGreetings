import './index.css'

const ButtonItem = props => {
  const {details, isActive, onChangeLanguage} = props
  const {id, buttonText} = details
  const btnClsName = isActive === true ? 'active-btn' : 'inactive-btn'

  const onClicked = () => {
    onChangeLanguage(id)
  }

  return (
    <li>
      <button type="button" className={`btn ${btnClsName}`} onClick={onClicked}>
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonItem
