import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './component/CakeContainer';
import HooksCakeContainer from './component/HooksCakeContainer';
import NewCakeContainer from './component/NewCakeContainer';
import ItemContainer from './component/ItemContainer';
import IceContainer from './component/IceContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ItemContainer cake/>
      <ItemContainer />

      <HooksCakeContainer/>
      <CakeContainer/>
      <IceContainer/>
      <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
