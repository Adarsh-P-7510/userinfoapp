import logo from './logo.svg';
import './App.css';
import AddInfo from './components/AddInfo';
import UserSearch from './components/UserSearch';
import DeleteUser from './components/DeleteUser';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddInfo/>}/>
      <Route path='/UserSearch' element={<UserSearch/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      <Route path='/DeleteUser' element={<DeleteUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
