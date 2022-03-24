import react from "@vitejs/plugin-react";;

import View from './components/viewDays/viewtransactions';
import Buy from './components/buy';
import Navbar from './components/Navbar';
import Footer from './components/footer.jsx';
import Home from './components/home';

function App() {
  return (
    <div ClassName="App">

     <h1>Hello world</h1>
      <Navbar/>
      <Home/>
      <Buy/>
      {/* <View/> */}
      <Footer/>

    </div>
  )
}


export default App;


