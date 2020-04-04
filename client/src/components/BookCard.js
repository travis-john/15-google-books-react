import React from "react";
import {Card, CardBody, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';


function BookCard({ title, children }) {
  return (
    <Card className='mt-4'>
      <CardHeader tag='h3'>
        <FontAwesomeIcon className='fa' icon={faBook} />
        {title}
      </CardHeader>
      <CardBody> {children} </CardBody>
    </Card>
  );
}

export default BookCard;
