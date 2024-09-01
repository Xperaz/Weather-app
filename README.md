# Vanguard Weather-app assignment

weather dashboard built with Next.js, TypeScript, and Styled Components.

## Features
- Real-time weather information for any city
- Ability to add and remove city to favorite list
- Store the favorite city list in localStorage
- Responsive design for desktop and mobile devices
- Chart visualization for weather data
- 7-day weather forecast

## Technologies Used
- Next.js
- TypeScript
- Styled Components
- OpenWeather API
- Chart.js
- Docker

## How to run?

### First choice

You can test the deployed app by following this link: [Weather-app](https://vanguard-weather.vercel.app/)

### Second choice (using docker)

> [!NOTE]  
> For the second and third choices you will need to create `.env` file in the root project directory.

#### Use this .env for testing:

> I know it's a bad idea to put this information here, but just to make your life easier with testing.<br/>

```
NEXT_PUBLIC_OPEN_WEATHER_API_KEY=0c8256bdec9643d424610cf3599010b2
NEXT_PUBLIC_API_BASE=https://api.openweathermap.org/data/2.5
``` 
<br/>

> [!IMPORTANT]  
> I assume you have docker in your machine, and it's running.

1. Clone the repository
2. Go to the root directory, then open your terminal and run: `docker compose up -d`
3. Now you can see the app in your localhost: ``` localhost:3000 ```


## Third choice (Run app directly in your local)

1. Clone the repository
2. Go to the root project directory.
3. Run ``` npm install ```.
4. Run ``` npm run dev ```.
5. Now you can see the app in your localhost ``` localhost:3000 ```
