import HomePage   from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import NotePage from './pages/NotePage.jsx';

import {Routes,Route} from 'react-router';


const App =() =>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/note/:id" element={<NotePage/>} />
      </Routes>
    </div>
  );
}

export default App