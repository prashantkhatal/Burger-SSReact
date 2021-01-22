export const loadBurgers = () => {
  return fetch('/api/burgers')
  .then(response => response.json());
};

export const toggleBurgerState = (id, devoured) => {
  return fetch(`/api/burgers/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: new URLSearchParams({
      devoured: devoured,
    }).toString()
  });
}

export const addNewBurger = (burgerName, devoured) => {
  return fetch('/api/burgers', {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: new URLSearchParams({
      burger_name: burgerName,
      devoured: +devoured,
    }).toString()
  })
  .then(response => response.json());
}