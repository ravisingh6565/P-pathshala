import ReactDOM from 'react-dom/client'
import React from 'react';

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

// const heading = <h1>hello from react</h1>
// const heading = React.createElement('h1',{},"hello from react")
const Heading = ()=>{
    return <h1>hello from react 1</h1>
}
console.log(Heading())
root.render(<Heading/>)
// root.render(heading)