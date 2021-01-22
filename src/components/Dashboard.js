import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { addNewBurger, loadBurgers, toggleBurgerState } from '../services/BurgerService';
import Actionpanel from './Actionpanel';
import AddBurgerView from './AddBurgerView';

const Dashboard = () => {

  const [burgers, setBurgers] = useState([]);

  const [devouredBurgers, undevouredBurgers] = useMemo(() => {
    const devouredBurgers = [];
    const undevouredBurgers = burgers.filter(burger => {
      burger.devoured && devouredBurgers.push(burger);
      return !burger.devoured;
    });
    return [devouredBurgers, undevouredBurgers];
  }, [burgers]);

  const refreshBurgerData = useCallback(() => {
    loadBurgers()
    .then(data => {
      setBurgers(data.id.burgers);
    });
  }, []);

  const changeBurgerState = useCallback((id, devoured) => {
    toggleBurgerState(id, devoured)
    .then(data => {
      refreshBurgerData();
    });
  }, []);

  const addBurgerClick = useCallback((burgerName, devoured) => {
    addNewBurger(burgerName, devoured).then(data => {
      refreshBurgerData();
    });
  }, []);

  useEffect(() => {
    refreshBurgerData();
  }, [refreshBurgerData])

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-one-third ">
          <h1 className="has-text-centered is-size-1">React - Eat Da Burger!</h1>
          <figure className="image container">
            <img src="assets/img/Burger_HD.gif" alt="Burger" />
          </figure>
        </div>
      </div>
      <div className="columns is-4">
        <Actionpanel
          burgers={undevouredBurgers}
          title="Uneaten!"
          actionButtonText="UNEAT!"
          changeBurgerState={changeBurgerState}
        />
        <AddBurgerView
          addBurgerClick={addBurgerClick}
        />
        <Actionpanel
          burgers={devouredBurgers}
          title="Devoured!"
          actionButtonText="EATEN!"
          changeBurgerState={changeBurgerState}
        />
      </div>
    </>
  );
};

export default Dashboard;