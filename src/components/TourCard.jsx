import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import MyModal from './MyModal';
import { useState } from 'react';


const TourCard = ({id, image, info, name, price}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Card
      style={{minHeight:'380px'}}
>
  <div>
  <img
    style={{objectFit:'cover', width:'100%', height:'250px'}}
    alt="Sample"
    src={image}
  />
  </div>
  <CardBody style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
    <CardTitle tag="h5">
      {name}
    </CardTitle>
      <span style={{display:'block'}}><Button onClick={toggle} className='bg-primary' style={{ textAlign:'left', whiteSpace: 'nowrap', width:'auto', display: 'inline-block'}}>
      Read more ➡
    </Button></span>
  </CardBody>
  <MyModal image={image} info={info} price={price} modal={modal} setModal={setModal}/>
</Card>
    </div>
  )
}

export default TourCard
