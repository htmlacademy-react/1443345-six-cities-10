import MainPage from '../../pages/Main/Main';

type numberOfPlacesProp = {
  numberOfPlaces: number
}

function App({numberOfPlaces}: numberOfPlacesProp): JSX.Element {
  return <MainPage numberOfPlaces={numberOfPlaces} />;
}

export default App;
