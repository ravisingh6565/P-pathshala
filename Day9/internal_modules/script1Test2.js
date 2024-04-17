const fs = require("fs");
const http = require("http");
const url = require("url");

const port = 3000;
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;

const searchBar = `
<form action="/product">
    <input type="text" name="pname">
    <input type="submit" value="search" />
</form>`;

const cardTemplate = `
<div class='product-card'>
    <h3 name="title">$Title$</h3>
    <img src="$link$">
    <a href="$hlink$">read more..</a>
</div>`;

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    });

    const { pathname } = url.parse(req.url);

    if (pathname == '/') {
        let result = searchBar;
        for (let i = 0; i < dataObj.length; i++) {
            let temp = cardTemplate;
            temp = temp.replace('$Title$', dataObj[i].title);
            temp = temp.replace('$hlink$', `/product?id=${i}`);
            temp = temp.replace('$link$', dataObj[i].images[0]);
            result += temp;
        }
        res.end(result);
    } else if (pathname == '/product') {
        const parsedUrl = url.parse(req.url, true);
        const id = parsedUrl.query.id;
        const pname = parsedUrl.query.pname;

        if (pname) {
            const searchResult = dataObj.filter((elem) => elem.title.includes(pname));
            if (searchResult.length > 0) {
                let result = searchBar;
                searchResult.forEach((product) => {
                    let temp = cardTemplate;
                    temp = temp.replace('$Title$', product.title);
                    temp = temp.replace('$hlink$', `/product?id=${dataObj.indexOf(product)}`);
                    temp = temp.replace('$link$', product.images[0]);
                    result += temp;
                });
                res.end(result);
            } else {
                res.end('No products found matching the search criteria.');
            }
        } else if (id !== undefined && id >= 0 && id < dataObj.length) {
            let temp = cardTemplate;
            temp = temp.replace('$Title$', dataObj[id].title);
            temp = temp.replace('$hlink$', `/product?id=${id}`);
            temp = temp.replace('$link$', dataObj[id].images[0]);
            res.end(searchBar + temp);
        } else {
            res.end('Invalid product ID.');
        }
    } else {
        res.end('Page not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
