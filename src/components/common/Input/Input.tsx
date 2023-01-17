import { Component, ChangeEvent, Fragment } from "react"
import { WeatherContext } from "../../WeathrCard/weatherContext"

interface InputProps {
    value?: string,
    onChange: (value: string, e: ChangeEvent<HTMLInputElement>) => void
}

export class Input extends Component<InputProps>{
    static contextType = WeatherContext
    render() {
        return <input value={this.context.value} onChange={(e) => this.context.onChange(e.target.value, e)} />
    }
}