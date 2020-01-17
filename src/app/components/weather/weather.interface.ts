export interface Weather {
    temp: Temperature;
    main: string;
    humidity: number;
    city: string;
};

interface Temperature {
    current: number;
    min: number;
    max: number;
    feels_like: number;
};