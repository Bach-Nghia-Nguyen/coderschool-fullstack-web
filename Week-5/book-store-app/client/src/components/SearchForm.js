import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const SearchForm = ({
  loading,
  searchInput,
  handleSearchChange,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          {/* Search field */}
          <Form.Control
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearchChange}
          />
        </Col>

        {loading ? (
          <Button disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Search..
          </Button>
        ) : (
          <Button type="submit">Search</Button>
        )}
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
