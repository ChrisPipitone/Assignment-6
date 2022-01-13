import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'


import 'bootstrap/dist/css/bootstrap.min.css';
import CityCard from './components/CityCard';

function App() {

  const [data, setData] = useState([])

  let url = `http://ctp-zip-api.herokuapp.com/city/`;
  let givenCity;
  const cityInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    givenCity = cityInput.current.value;
    console.log(givenCity) 
    const newUrl = url + givenCity;
  
    console.log(newUrl)
    getData();
  }
//Not sure why this isn't working 
//it finds the json data and returns the proper url in the browser console so im assuming 
//the issue isn't here its some how with the return ??

  const getData = async () => {
     await axios.get(`http://ctp-zip-api.herokuapp.com/city/${givenCity}`)
    // axios.get(`http://ctp-zip-api.herokuapp.com/city/BROOKLYN`)
      .then(res => {
        setData(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
     <div>
        <div className="p-5 bg-dark fs-1">
          <div className="text-light text-center"><b>CITY NAME(ONLY ACCEPTS CAPITALIZED ENTRIES</b></div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="m-3">City Information</div>
          <form className="m-3">
            <input ref={cityInput} type="text"></input>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>

        <div className="row">
          {
            data.map(element => (
                < div key={element.RecordNumber} >
                  <CityCard cityValue={element} />
                </div>
            )
            )
          }
        </div>
     </div>
    
  );
}

export default App;
