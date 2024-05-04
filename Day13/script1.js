const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
// // console.log("js works");
// const parent = document.getElementById("root");
// const h1 = `<h1></h1>
// <ul>
//     <li>list </li>
//     <li> list 2</li>
// </ul>`
// parent.innerHTML = h1;
// console.log(React)

const heading = React.createElement('h1',{key:'h1'},"hello from react");
const li1= React.createElement('li',{key:'li1', className:'li-c-1',
    style:{
        backgroundColor:"red",
    }
},"list item1");
const li2= React.createElement('li',{key:'li2'},"list item2");
const ul = React.createElement('ul',{key:'ul'},[li1,li2]);
// const main = [heading,ul]
// console.log(heading)
root.render([heading,ul]);