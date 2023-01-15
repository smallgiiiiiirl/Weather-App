export interface Weather{
    weathers: {id: number, main: string, description: string, }[],
    main: {temp: number, feels_like: number,pressure: number, humidity: number},
    visibility: number,
    wind: {speed: number, deg: number},
    sys:{type: number, id: number,country: string}
    timezone: number,
    id: number,
    name: string,
    cod: number

}