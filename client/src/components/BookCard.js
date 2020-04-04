import React from "react";
import {Card, CardBody, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function BookCard({ icon, title, children }) {
  return (
    <Card className='mt-4'>
      <CardHeader tag='h3'>
        <FontAwesomeIcon className='fa' icon={icon} />
        {title}
      </CardHeader>
      <CardBody> {children} </CardBody>
    </Card>
  );
}

export default BookCard;
