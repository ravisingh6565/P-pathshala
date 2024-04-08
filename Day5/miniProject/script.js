console.log("...API STARTED");

function callAPI() {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            renderUI(data);
        })
}

// callAPI();
const root = document.getElementById("root");

function renderUI(data) {
    const articles = data.articles;
    for(let i=0;i<articles.length;i++){

    const arr = articles[i];
    // console.log(arr[0]);

    const div = document.createElement("div");
    div.setAttribute("class","news-card");
    const h3   = document.createElement("h3");
    const img = document.createElement("img");
    
    img.src = arr.urlToImage;
    h3.innerText = arr.title;
    div.appendChild(h3);
    div.appendChild(img);
    // div.innerText = arr.title;
    root.appendChild(div);
    }
}

// renderUI();

callAPI();