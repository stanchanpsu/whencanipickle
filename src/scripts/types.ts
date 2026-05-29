export interface Location {
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  timezone: string;
  rank?: string;
}

export interface RawForecast {
  startTime: string;
  temperature: number;
  shortForecast: string;
  relativeHumidity: { value: number };
  windSpeed: string;
  windDirection?: string;
}

export type FailureReason = "nighttime" | "temperature-low" | "temperature-high" | "humidity" | "precipitation" | "wind";

export type SunEvent = "sunrise" | "sunset";

export interface ForecastEvaluation {
  isGood: boolean;
  failureReasons: FailureReason[];
  sunEvent: SunEvent | null;
}

export type Forecast = RawForecast & ForecastEvaluation;

export interface ForecastsEvent extends CustomEvent {
  detail: { forecasts: RawForecast[]; timezone: string };
}

export interface AllForecastsEvent extends CustomEvent {
  detail: { forecasts: Forecast[]; timezone: string };
}
