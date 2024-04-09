const country = 'IN';
const city = prompt("enter city name");


function fetchAPI(){
      const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+city+','+country+'?key=NC75XTZMU6PGGDB2EXGHZCXZF';
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log(data.currentConditions.datetime
        // );
        // .then(console.log);
            renderUI(data);
    })
    }

    const root= document.getElementById("root");

    function renderUI(data){
        const arr= data.days;
        const row = document.createElement("tr");
        row.innerText = data.address;
        // console.log(data);
        root.appendChild(row);
        // console.log(arr[2].temp);
       for( let i=0;i<arr.length;i++){
        const column = document.createElement('td');
        column.innerText = arr[i].temp;
        row.appendChild(column);
       }
    }

fetchAPI();