import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
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
        <Route path='/profile' element={<Profile postsData={props.postsData} addPost={props.addPost} />} />
        <Route path='/messages' element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
      </Routes>
      </main>
    </div>
    
    
  );
}

export default App;
