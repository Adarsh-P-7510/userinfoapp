import logo from './logo.svg';
import './App.css';
import AddInfo from './components/AddInfo';
import UserSearch from './components/UserSearch';
import DeleteUser from './components/DeleteUser';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>

      <AddInfo/>
      <UserSearch/>
      <DeleteUser/>
      <ViewAll/>
     
    </div>
  );
}

export default App;
