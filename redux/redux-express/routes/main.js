const express = require('express');
const router = express.Router();
const store = require('../store');
const actions = require('../actions');

router.get('/', async (req, res) => {
  store.subscribe(() => {
    console.log('State Changed', store.getState());
  });
  store.dispatch(actions.incCounter(1));
  store.dispatch(actions.incCounter(5));
  store.dispatch(actions.incCounter(1));
  store.dispatch(actions.incCounter(1));
  store.dispatch(actions.incCounter(1));
  store.dispatch(actions.decCounter(4));
  store.dispatch(actions.changeUser('Patrick', 'New York City'));
  store.dispatch(actions.addPost('My First Post'));
  store.dispatch(actions.addPost('My Second Post'));
  store.dispatch(actions.incCounter(10));

  console.log(store.getState().user);

  store.dispatch(actions.changeUserName('John'));
  console.log(store.getState().user);
  store.dispatch(actions.changeUserLocation('Hoboken'));
  console.log(store.getState().user);
  console.log(store.getState().counter);
  console.log(store.getState().posts);
  res.sendStatus(200);
});

module.exports = router;
