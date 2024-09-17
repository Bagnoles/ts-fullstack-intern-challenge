import { Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen'
import { AppRoutes } from '../../const';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App() {
  
    return (
      <Routes>
        <Route path={AppRoutes.Main} element={<MainScreen />} />
        <Route path={AppRoutes.Favorite} element={<FavoriteScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    )
  }
  
  export default App