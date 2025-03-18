import LanguageProvider from '../../context/LanguageProvider';

import LanguageView from '../LanguageView/LanguageView';

import '../../styles/style.css';

function App() {


  return (
    <>
      <LanguageProvider>
        <LanguageView />
      </LanguageProvider>
    </>
  )
}

export default App
