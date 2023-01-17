import { createContext } from "react";

export const WeatherContext = createContext({
    search: "Minsk",
    onChange: () => {},
    main: {temp: 20, feels_like: 24, pressure: 100000, humidity: 80},
    // visibility: 200,
    // sys:{country: "Belarus"},
    // wind:{ speed: 3.8},
})