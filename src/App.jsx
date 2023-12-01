import Header from "./components/Header"
import './assets/scss/style.scss';
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { UseWidthHeight } from "./components/WidthHeight";
import appStore from "./components/store";

function App() {

  const widthHeight = UseWidthHeight();
  const burger = appStore(store => store.burger);

  return (
    <div className={`relative max-w-[1920px] min-w-[400px] w-full bg-[#0B0C0D] mx-auto overflow-hidden ${burger ? 'h-[100vh]' : ''}`}>
        <span className={` fixed top-0 right-[100px] text-2xl text-white z-50`}>
          {`${widthHeight[0]} X ${widthHeight[1]}`}
        </span>
        <Header/>
        <MainPage/>
        <Footer/>
    </div>
  )
}

export default App
