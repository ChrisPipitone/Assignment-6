import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap';


const ZipCard = (zipValue) => {

    console.log(zipValue.zipValue)

    const renderZipInfo = () => (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="bg-dark"><div className="text-light p-2">{zipValue.zipValue.City}, {zipValue.zipValue.State}</div></Card.Title>
                <Card.Text>
                    <ul>
                        <li>Population: {zipValue.zipValue.EstimatedPopulation}</li>
                        <li>Location: ({zipValue.zipValue.Lat}, {zipValue.zipValue.Long})</li>
                        <li>State: {zipValue.zipValue.State}</li>
                        <li>Total Wages: {zipValue.zipValue.TotalWages}</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <div>
            {zipValue ? renderZipInfo() : <p> no zipValue available</p>}
        </div>
    )
}

export default ZipCard;
