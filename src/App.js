import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Experience from './components/Experience';
import {React, useEffect, useState} from "react";
import axios from "axios";


function App() { 
  const readtoken = "911e8fa32738bf03d41250debebf5fdb9e11c76f"
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site/?auth_token=${readtoken}`).then(res => {
        setData(res.data.data.fields.my_personal_portfolio);
      }).catch(err => {
        console.log(err);
      })
    }
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <Home content={data[0]}/>
      <About content={data[1]}/>
      <Experience />
      <Skills content={data[2]}/>
      <Works content={data[3]}/>
    </div>
  );
}
export default App;