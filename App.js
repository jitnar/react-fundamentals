// const heading = document.createElement("h1");
// heading.innerHTML =
//   "<a href='https://google.com'>Hello World from javascript</a>";

// const rootNode = document.getElementById("root");
// rootNode.appendChild(heading);

//react

const heading = React.createElement("div", {}, [
  React.createElement("h1", {}, "heading h1"),
  React.createElement("h2", {}, "heading h2"),
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
