console.log("...API STARTED");

function callAPI(){
  fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec")
  .then((res)=>{
     return res.json();
  })
  .then((data)=>{
    // console.log(data);
    renderUI(data);
  })
}

// callAPI();

function renderUI(data){
    const root = document.getElementById("root");

    const div = document.createElement("div");
    div.innerText = 'card';

    root.appendChild(div);
    console.log(data);
}

// renderUI();

callAPI();