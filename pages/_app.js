import '../styles/globals.css'
import { Provider} from "react-redux"
import {store, persistor} from '../redux/store'
import Navbar from '../components/navbar.component'
import {PersistGate} from "redux-persist/integration/react"

function MyApp({ Component, pageProps,  }) {


  return <Provider store={store} >
    <PersistGate persistor={persistor}>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
   </PersistGate>
  </Provider>
}

export default MyApp