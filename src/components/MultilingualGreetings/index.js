import LanguageContext from '../../context/LanguageContext'
import './index.css'
import ButtonItem from '../ButtonItem'

const MultilingualGreetings = props => {
  const {languageGreetingsList} = props
  console.log(languageGreetingsList)

  return (
    <LanguageContext.Consumer>
      {value => {
        const {activeLanguage, changeLanguage} = value
        const activeLanguageDetails = languageGreetingsList.filter(
          eachObj => eachObj.id === activeLanguage,
        )
        const imgUrl = activeLanguageDetails[0].imageUrl
        const imgAltText = activeLanguageDetails[0].imageAltText

        const onChangeLanguage = id => {
          changeLanguage(id)
        }

        return (
          <div className="app-container">
            <h1 className="heading">Multilingual Greetings</h1>
            <ul className="buttons-container">
              {languageGreetingsList.map(eachObj => (
                <ButtonItem
                  key={eachObj.id}
                  details={eachObj}
                  isActive={eachObj.id === activeLanguage}
                  onChangeLanguage={onChangeLanguage}
                />
              ))}
            </ul>
            <div>
              <img src={imgUrl} alt={imgAltText} className="img-styles" />
            </div>
          </div>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default MultilingualGreetings
