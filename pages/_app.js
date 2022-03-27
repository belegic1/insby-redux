import '../styles/globals.css'
import { Provider} from "react-redux"
import store from '../redux/store'
import Navbar from '../components/navbar.component'

function MyApp({ Component, pageProps,  }) {


  return <Provider store={store} >
    <div>
      <Navbar />
      <Component {...pageProps} />
   </div>
  </Provider>
}

export default MyApp