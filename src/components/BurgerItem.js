import React from 'react';
import { useCallback } from 'react/cjs/react.development';

const BurgerItem = ({
  id,
  burgerName = '',
  devoured,
  actionButtonText,
  changeBurgerState,
}) => {

  const onClick = useCallback(() => {
    changeBurgerState(id, !devoured);
  }, []);

  return (
    <li>
      <div className="box">
        <h3 className="is-size-3">{burgerName}</h3>
        <a
          className="change-devour button is-primary"
          onClick={onClick}
        >
          {actionButtonText}
		    </a>
      </div>
    </li>

  );

};

export default BurgerItem;