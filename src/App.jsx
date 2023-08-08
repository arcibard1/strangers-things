import {Routes, Route} from 'react-router-dom';
import  NavBar from './NavBar.jsx'
import PostPage from './PostPage.jsx';


const App = () => {
  return (
  <>
  <NavBar />
    <Routes>
      <Route path='/post' element= {<PostPage />} />

    </Routes>

  </>
  
  )
}

export default App
