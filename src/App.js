import { Routes, Route } from 'react-router-dom';
import MainNavigation from './components/layouts/MainNavigation';
import AllMeetups from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetups />} />
        <Route path='/favorites' element={<Favourites />} />
        <Route path='/new-meetup' element={<NewMeetup />} />
      </Routes>
    </div>
  );
}

export default App;
