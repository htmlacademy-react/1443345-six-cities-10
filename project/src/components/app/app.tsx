import { MainPage } from '../../pages/main/main';

type numberOfPlacesProp = {
  numberOfPlaces: number
}

export function App({numberOfPlaces}: numberOfPlacesProp): JSX.Element {
  return <MainPage numberOfPlaces={numberOfPlaces} />;
}
