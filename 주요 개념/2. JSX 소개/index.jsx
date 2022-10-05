
const name = 'Jang Chicken';
var element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
)
 

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
)
 

element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
)
 

element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

// element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

ReactDOM.render(
  element,
  document.getElementById('root')
)
 