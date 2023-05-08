import React, { useEffect, useState } from "react";
import Slider from "../../components/slider";
import MainArticle from "../../components/mainArticle";
import Switch from "../../components/switch";
import axiosClient from "../../api/index.js";
import "./style.css";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const [weather, setWeather] = useState({});
  const [isCheck, setIsCheck] = useState(false);

  const onChangeBlogs = (value) => {
    setIsCheck(value);
  };

  const getData = async () => {
    const res = await axiosClient.get("/blog", {
      params: {
        isFeature: isCheck,
      },
    });

    if (res.status === 200) {
      setBlog(res.data);
    }
  };

  const weatherData = async () => {
    const url = import.meta.env.VITE_WEATHER_URL;
    const res = await fetch(url);
    const data = await res.json();
    setWeather({
      temperature: data?.current_weather?.temperature,
      windspeed: data?.current_weather?.windspeed,
    });
  };

  useEffect(() => {
    weatherData();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Slider />
      <div className="home-weather">
        <span>Temperature: {weather?.temperature} °C</span>
        <span>Wind Speed: {weather?.windspeed} m/s</span>
      </div>
      <div className="home-switch">
        <span>Feature Blogs</span>
        <Switch onChange={onChangeBlogs} isCheck={isCheck} />
      </div>
      <div className="home-container">
        {blog.length > 0 ? (
          blog.map((data, index) => <MainArticle key={index} {...data} />)
        ) : (
          <div className="home-empty-blog">No blog right now...</div>
        )}
      </div>
    </>
  );
};

export default Home;
