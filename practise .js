const element=React.createElement("div",{id:"unique"},React.createElement("h1",{},"hlo"));
const root=ReactDOM.createRoot(document.getElementById("hello"));
console.log(root);
console.log(element);


root.render(element);

