import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Header";
import Image from "./Image";
import Explanation from "./Explanation";
import Footer from "./Footer";


const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=72mrcQNvwmm6PXx6MhQf2F9o5xPCdqxAE5tZIhmR';

function App() {

  const [nasaDataState, setNasaDataState] = useState({})

  useEffect(() => {
    axios.get(nasaApi)
      .then(response => {
        console.log(response.data);
        setNasaDataState(response.data)
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="App">
      <Header title = {nasaDataState.title} date = {nasaDataState.date}/>
      <div className = "mid">
        <Image source = {nasaDataState.url} copyright = {nasaDataState.copyright}/>
        <Explanation explanation = {nasaDataState.explanation}/>
      </div>
      <Footer service = {nasaDataState.service_version} media = {nasaDataState.media_type}/>
    </div>
  );
}

export default App;
