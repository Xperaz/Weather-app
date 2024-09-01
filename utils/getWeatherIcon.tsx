import {
  FaCloud,
  FaSun,
  FaCloudRain,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";

const getWeatherIcon = (weatherDescription: string): JSX.Element | null => {
  const iconProps = {
    style: { fontSize: "3em", color: "#fff", fontWeight: 700, lineHeight: 1 },
  };

  switch (
    weatherDescription.toLowerCase() // Use toLowerCase instead of toLocaleLowerCase
  ) {
    case "clear sky":
      return <FaSun {...iconProps} />; // Return the JSX element directly
    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
    case "overcast clouds":
    case "clouds":
      return <FaCloud {...iconProps} />;
    case "rain":
    case "shower rain":
    case "light rain":
    case "moderate rain":
    case "heavy intensity rain":
      return <FaCloudRain {...iconProps} />;
    case "snow":
    case "light snow":
    case "moderate snow":
      return <FaSnowflake {...iconProps} />;
    case "smog":
    case "mist":
    case "haze":
    case "fog":
    case "dust":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
      return <FaSmog {...iconProps} />;
    default:
      return null;
  }
};

export default getWeatherIcon;
