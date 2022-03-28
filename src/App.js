import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AllMeetups from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetups />} />
        <Route path='/favorites' element={<Favourites />} />
        <Route path='/new-meetup' element={<NewMeetup />} />
      </Routes>
    </Layout>
  );
}

export default App;
