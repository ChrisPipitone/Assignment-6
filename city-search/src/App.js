import React, { useState, useEffect } from 'react';
import axios from 'axios'


import 'bootstrap/dist/css/bootstrap.min.css';
import ZipCard from './components/ZipCard';

function App() {

  const [data, setData] = useState([])

  let url = `http://ctp-zip-api.herokuapp.com/zip/10312`

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUrl = url + event.target.value;
    console.log(event.target.value);
    console.log(newUrl)
  }


  const getData = async () => {
    console.log(url)
    await axios.get(url)
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
            <input type="text"></input>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>

        <div className="container d-flex justify-content-center">
          {
            data.map(element => (
              <div class="row justify-content-md-center">
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
