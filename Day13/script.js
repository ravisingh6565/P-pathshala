const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// const heading = React.createElement('h1',{},"hello from react");
const str = 'hello from react!!!'
const heading = <h1>{str}</h1>

const li1 = <li className = 'li-c-1' key='li1'> Items1</li>
const li2 = <li key = 'li2'>Items2</li>
// const list = <ul>{li1}{li2}</ul>
const arr = [li1, li2]
const list = <ul>{arr.map((elem) => { return elem; })}</ul>

root.render(list);