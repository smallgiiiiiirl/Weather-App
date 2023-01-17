import { FC } from "react"
import { Weather } from "../../types/Weather"
import { Card } from "../Card"
import css from "./styles.module.css"

export const WeatherList: FC<{ weathers: Weather[] }> = ({ weathers }) => {
    return (
        <ul>
            {weathers.map((item) => (
                <li key={item.id}>
                    <Card weather={item} />
                </li>
            ))}
        </ul>
    )
}