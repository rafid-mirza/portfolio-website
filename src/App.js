import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import {React, useEffect, useState} from "react";
import axios from "axios";


function App() { 
  const readtoken = "15e00a3774d61d4f2eea91fa9fb4a9684b37bf66"
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.buttercms.com/v2/pages/portfolio/my-personal-portfolio/?auth_token=${readtoken}`).then(res => {
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
      <Skills content={data[2]}/>
      <Works content={data[3]}/>
    </div>
  );
}
export default App;