import { useState } from 'react';
import { Container, Form, FormControl, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../useAxios';

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const [namePokemon, setNamePokemon] = useState('');
  return (
    <div>
      <Container>
        <Nav className="me-auto">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={({ target }) => setNamePokemon(target.value)}
            />
            <Link to="/selected-pokemon">
              <Button
                variant="outline-success"
                onClick={() => dispatch(getPokemon(namePokemon))}
              >
                Search
              </Button>
            </Link>
          </Form>
        </Nav>
      </Container>
    </div>
  );
};
export default SearchPokemon;
