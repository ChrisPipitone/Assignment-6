import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap';


const CityCard = (cityValue) => {

    console.log(cityValue.cityValue)

    const renderCityInfo = () => (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="bg-dark"><div className="text-light p-2"> Zipcode </div></Card.Title>
                <Card.Text>
                    <p>{cityValue.cityValue}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <div>
            {cityValue ? renderCityInfo() : <p> no cityValue available</p>}
        </div>
    )
}

export default CityCard;
