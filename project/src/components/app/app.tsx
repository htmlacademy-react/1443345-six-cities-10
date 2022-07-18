import { MainPage } from '../../pages/main-page/main-page';

type numberOfPlacesProp = {
  numberOfPlaces: number
}

export function App({numberOfPlaces}: numberOfPlacesProp): JSX.Element {
  return <MainPage numberOfPlaces={numberOfPlaces} />;
}
