import { Icon } from "./WeatherIcons.styled";

function IconWeatherHailSun(props) {
  return (
    <Icon viewBox="0 0 64 64" {...props}>
      <path
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={6}
        d="M56 45c4.19 0 7-2.81 7-7 0-4.189-2.81-9-7-9 0-10.475-9.525-18-20-18-9.271 0-17.348 6.211-19 15h-2c-5.238 0-9 4.762-9 10s3.762 9 9 9h41z"
      />
      <path
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={6}
        d="M29.999 11.752A12.945 12.945 0 0022 9C14.82 9 9 14.82 9 22c0 2.577.707 3.979 2 6M6 22H0M22 6V0M10 10L4 4M20 48l-4 9M30 48l-4 9M40 48l-4 9M50 48l-4 9M15 60l-1 2M25 60l-1 2M35 60l-1 2M45 60l-1 2"
      />
    </Icon>
  );
}

export default IconWeatherHailSun;
