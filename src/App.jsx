import Header from "./components/Header"
import './assets/scss/style.scss';
import MainPage from "./components/MainPage";

function App() {

  return (
    <div className={`relative max-w-[1920px] w-full bg-[#0B0C0D] mx-auto`}>
        <Header/>
        <MainPage/>
    </div>
  )
}

export default App
