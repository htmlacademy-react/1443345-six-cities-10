import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../assets/const';

import { MainPage } from '../../pages/main-page/main-page';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { Room } from '../../pages/room/room';
import { NotFound } from '../../pages/not-found/not-found';
import { PrivateRoute } from '../private-route/private-route';


type numberOfPlacesProp = {
  numberOfPlaces: number
}

export function App({numberOfPlaces}: numberOfPlacesProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage numberOfPlaces={numberOfPlaces} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Room />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
