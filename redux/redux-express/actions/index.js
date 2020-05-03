changeUser = (name, location) => ({
  type: 'CHANGE_USER',
  name,
  location
});

changeUserName = (name) => ({
  type: 'CHANGE_NAME',
  name
});

changeUserLocation = (location) => ({
  type: 'CHANGE_LOCATION',
  location
});

addPost = (post) => ({
  type: 'ADD_POST',
  post
});
incCounter = (number) => ({
  type: 'INC',
  number: number
});
decCounter = (number) => ({
  type: 'DEC',
  number: number
});

module.exports = {
  changeUser,
  addPost,
  incCounter,
  decCounter,
  changeUserLocation,
  changeUserName
};
