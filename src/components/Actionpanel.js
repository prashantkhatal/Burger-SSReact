import React from 'react';
import BurgerItem from './BurgerItem';

const Actionpanel = ({
  title = '',
  burgers,
  actionButtonText = '',
  changeBurgerState,
}) => {

  return (
    <div className="column">
      <h2 className="is-size-2 has-text-centered">{title}</h2>
      <ul className="scrollable">
        {burgers.map(({id, burger_name, devoured}) => {
          return <BurgerItem
            id={id}
            key={id}
            devoured={devoured}
            burgerName={burger_name}
            actionButtonText={actionButtonText}
            changeBurgerState={changeBurgerState}
          />
        })}
      </ul>
    </div>
  );

};

export default Actionpanel;