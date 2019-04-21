function showTodo(todo) {
  console.log(`${todo.title}
    ${todo.text}`);
}
let myTodo = {
  title: "Pay the Cable Bill",
  text: "Don't forget to pay the cable bill by May 23rd"
};
showTodo(myTodo);
