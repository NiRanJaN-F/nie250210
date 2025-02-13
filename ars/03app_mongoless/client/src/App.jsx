import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageList from './flights/PageList';
import PageCreate from './flights/PageCreate';
import PageEdit from './flights/PageEdit';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="" element={<PageList/>}/>
      <Route path="/flights/list" element={<PageList/>}/>
      <Route path="/flights/create" element={<PageCreate/>}/>
      <Route path="/flights/edit/:id" element={<PageEdit/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    
    </>
  )
}

export default App;
