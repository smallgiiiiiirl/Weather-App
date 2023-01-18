import { Component } from "react"
import { WeatherContext } from "./weatherContext";

interface WeatherCardProps {

}

export class WeatherCard extends Component<{}, WeatherCardProps>{
    static contextType = WeatherContext
    render() {
        return (
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        )
    }

}