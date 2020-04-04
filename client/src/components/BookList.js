import React from "react";
import {ListGroup, ListGroupItem} from 'reactstrap';

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ListGroup>
    {children}
  </ListGroup>
);

export function ListItem({ children }) {
  return <ListGroupItem>{children}</ListGroupItem>;
}
