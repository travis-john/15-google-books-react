import React from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

function BookForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="Query">
          <strong>Book</strong>
        </Label>
        <Input
          id="Title"
          type="text"
          value={q}
          placeholder="Enter book title"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <Button
          onClick={handleFormSubmit}
          type="submit"
          color='danger'
          size='lg'
          className="float-right"
        >
          Search
        </Button>
      </FormGroup>
    </Form>
  );
}

export default BookForm;
