import { Component } from "react"
import { Weather } from "./types/Weather"
import { Input } from './components/common/Input';
import { WeatherCard } from "./components/WeathrCard"
import { WeatherContext } from "./components/WeathrCard/weatherContext";
import { debounce } from "lodash"

interface Appstate {
    searchParams: string,
    weathers: Record<string, any> | null,
    isLoading: boolean
}
const FetchFunc = (url: string) => {
    return fetch(url).then((data) => {
        if (data.ok) {
            console.log(data)
            return data.json()
        }
        throw Error("Sorry...")
    })
}

export class App extends Component<{}, Appstate> {
    state: Appstate = {
        searchParams: "",
        weathers: null,
        isLoading: false
    }
    fetchWeather = () => {
        this.setState({ isLoading: true })
        this.setState({ isLoading: true });
        FetchFunc(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchParams}&APPID=${process.env.REACT_APP_OPEN_WEATHER_TOKEN}`)
            .then(({ data }) => {
                this.setState({ weathers: data })

            })
    }
    fetchWeatherDebounce = debounce(this.fetchWeather, 1_500)
    searchHandler = (searchParams: string) => {
        this.setState({ searchParams })
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        FetchFunc(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchParams}&APPID=${process.env.REACT_APP_OPEN_WEATHER_TOKEN}`)
            .then(({ data }) => {
                this.setState({ weathers: data });
            })
    }

    cosmponentDidUpdate(prevProps: unknown, prevState: Appstate) {
        if (prevState.searchParams !== this.state.searchParams) {
            this.fetchWeather();
        }
    }
    render() {

        return (
            <div>
                <WeatherContext.Provider value={{ ...(this.state.weathers ?? {}), value: this.state.searchParams, onChange: this.searchHandler }}>
                    <Input onChange={(searchParams) => this.setState({ searchParams })} />

                </WeatherContext.Provider>

            </div>
        )
    }
}

