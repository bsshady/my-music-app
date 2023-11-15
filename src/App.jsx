import MainPage from "./pages/MainPage/MainPage"
import style from "./global.module.scss"

const App =() => (
  <div className={style.wrapper}>
    <MainPage/>
    <div className={style.love}>i love you, KOTYA! :3</div>
  </div>
);

export default App
