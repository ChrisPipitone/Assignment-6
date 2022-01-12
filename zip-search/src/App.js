import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'


import 'bootstrap/dist/css/bootstrap.min.css';
import ZipCard from './components/ZipCard';

function App() {

  const [data, setData] = useState([])

  let url = `http://ctp-zip-api.herokuapp.com/zip/`
  const zipInput = useRef();
  let givenZip;
  const handleSubmit = (event) => {
    event.preventDefault();
    
    givenZip = zipInput.current.value;
    console.log(givenZip) 
    const newUrl = url + givenZip;
  
    console.log(newUrl)
  }


  const getData = async () => {
    //await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${givenZip}`)
    await axios.get(`http://ctp-zip-api.herokuapp.com/zip/10016`)
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
          <div className="text-light text-center"><b>ZIPCODE</b></div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="m-3">ZipCode Information</div>
          <form className="m-3">
            <input ref={zipInput} type="text"></input>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>

        <div className="container">
          {
            data.map(element => (
              <div className="row">
                < div key={element.RecordNumber} >
                  <ZipCard zipValue={element} />
                </div>
              </div>
            )
            )
          }
        </div>
     </div>
    
  );
}

export default App;
