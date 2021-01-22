import React, { useState } from 'react';
import { useCallback } from 'react/cjs/react.development';

const AddBurgerView = ({
  addBurgerClick
}) => {

  const [devoured, setDevoured] = useState(1);
  const [burgerName, setBurgerName] = useState('');

  const onAddClick = useCallback(() => {
    burgerName && addBurgerClick(burgerName, devoured);
    setBurgerName('');
    setDevoured(true);
  }, [burgerName, devoured]);

  return (
    <div className="column">
      <h2 className="is-size-2 has-text-centered">Add a Burger</h2>
      <form className="create-form">

        <div className="form-group">
          <label htmlFor="burger">Burger Name:</label>&nbsp;
          <input
            value={burgerName}
            type="text" id="burger" name="burger_name"
            onChange={(e) => { setBurgerName(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="devoured">Devoured?</label>
          <br />
          <input
            type="radio"
            id="devouredChk"
            name="devoured"
            value="1"
            checked={devoured}
            onChange={(e) => setDevoured(true)}
            /> <label htmlFor="devouredChk">Devoured!</label>
          <br />
          <input
            type="radio"
            id="undevouredChk"
            name="devoured"
            value="0"
            checked={!devoured}
            onChange={(e) => setDevoured(false)}
          /> <label htmlFor="undevouredChk">Not Devoured</label>
        </div>

        <button
          disabled={!burgerName}
          type="button"
          className="button is-primary"
          onClick={onAddClick}
        >
          Add Burger
        </button>
      </form>

    </div>
  );

};

export default AddBurgerView;