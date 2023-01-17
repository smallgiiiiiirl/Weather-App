import { FC } from "react"
import css from "./styles.module.css"
import { Weather } from "../../types/Weather"

export const Card: FC<{ weather: Weather }> = ({ weather }) => {

    return (
        <div className={css.Card}>
            <span>{weather.name}</span>
            <span>{weather.main.temp}</span>
        </div>
    )
}