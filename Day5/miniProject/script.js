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

function renderUI(data) {

    const root = document.getElementById("root");

    const arr = data.articles[0];
    // console.log(arr[0]);

    const div = document.createElement("div");
    const h3   = document.createElement("h3");
    h3.innerText = arr.title;
    div.appendChild(h3);

    // div.innerText = arr.title;
    root.appendChild(div);

}

// renderUI();

callAPI();