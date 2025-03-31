import { Routes, Route } from 'react-router-dom';

import NavMenu from '../NavMenu/NavMenu';
import HomePage from '../../pages/HomePage/HomePage';
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage';
import SingleArticlePage from '../../pages/SingleArticlePage/SingleArticlePage';

import '../../styles/style.css';

function App() {


  return (
    <>
      <NavMenu />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/articles/:id' element={<SingleArticlePage />} />
      </Routes>
    </>
  )
}

export default App
