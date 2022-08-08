import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <div className='wrapper'>
      <Header/>
      <main className='main'>
      <Navigation/>
      <Routes>
        <Route path='/profile' element={<Profile 
          store={props.store}
        />} />
        <Route path='/messages' element={<DialogsContainer
          store={props.store}
        />} />
      </Routes>
      </main>
      
    </div>
  );
}
export default App;
