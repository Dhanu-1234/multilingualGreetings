import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: '',
  changeLanguage: () => {},
})

export default LanguageContext
