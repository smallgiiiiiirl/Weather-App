import { Component } from "react"
import { Weather } from "./types/Weather"
import { Input } from './components/Input';
import { Card } from "./components/Card"
import { WeatherList } from "./components/WeatherList"
interface AppProps {
    searchParams: {},
    weathers: Weather[],
    isLoading: boolean
}
const FetchFunc = (url: string) => {
    return fetch(url).then((data) => {
        if (data.ok) {
            return data.json()
        }
        throw Error("Sorry...")
    })
}

export class App extends Component<{}, AppProps> {
    state: AppProps = {
        searchParams: {},
        weathers: [],
        isLoading: false
    }
    fetchWeather = () => {
        this.setState({ isLoading: true });
        FetchFunc("https://api.openweathermap.org / data / 2.5 / weather?q =London,uk & APPID=")
            .then(({ data }) => {
                this.setState({ weathers: data })
            })
    }
    componentDidMount() {
        this.setState({ isLoading: true });

        FetchFunc("https://api.openweathermap.org / data / 2.5 / weather?q =London,uk & APPID=")
            .then(({ data }) => {
                this.setState({ weathers: data });
            })
    }
    render() {

        return (
            <div>
                <Input onChange={(searchParams) => this.setState({ searchParams })} />
                <WeatherList weathers={this.state.weathers} />
            </div>
        )
    }
}

