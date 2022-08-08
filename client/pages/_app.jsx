import "../styles/css/globals.css";
import { createStore, applyMiddleware} from "redux";
import reducers from "../components/reducers/index";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk));

export default function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
