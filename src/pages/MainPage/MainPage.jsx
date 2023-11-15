import trackList from "../../assets/tracksList"
import style from "./MainPage.module.scss"
import Track from "../../components/Track/Track"
import { Input } from "@mui/material"

const MainPage = () => {
    return <div classNmae={style.search}>
        <Input className={style.input} placeholder="Поиск треков" />
        <div className={style.list}>
            {trackList.map((track) => (
                <Track key={track.id} {...track} />
            ))}
        </div>
    </div>
}

export default MainPage;