const reactContentRoot = document.getElementById("root");

function App() {
  const name = "Diego";
  return (
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>{name}</li>
    </ul>
  );
}

ReactDOM.render(App(), reactContentRoot);
