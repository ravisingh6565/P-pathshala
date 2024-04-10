// const b = new Buffer.from('Abcxya');
// console.log(b.toString());
// b.write('other');
// console.log(b.toString())


// const fs = require('fs');
// console.log('start')
// // const data = fs.writeFileSync('log.txt',"10th April",)
// const data = fs.readFileSync('log.txt',{encoding:'utf-8'})
// console.log(data)
// console.log('end')


//   Promises in File System ********************************************************************
// const fsPromises = require('fs/promises');
// console.log('start')

// const pr = fsPromises.readFile('myReadMe.txt',{encoding:'utf-8'})
// pr.then((res)=>{
//     console.log(res)
// })
//  console.log('end')




//            CallBack in file system   ***********************************


// const fs = require('fs')

// const data = fs.readFile('myReadMe.txt', { encoding: 'utf8' }, (err, data) => {
//     if (err)
//         console.log(err.message)
//     else
//         console.log(data)
// })

const http = require('http')
const port = 3000
// const page = '<h1>KIET college</h1>'

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
Products Cards
</body>
</html>
`
const page = htmlTemplate;
const app = http.createServer((req, res) => {
    console.log('request received')
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/html',
})
    // res.end('<h1>hello Ravi singh </h1>'+'<h3>hello Ravi singh </h3>');
    res.end(page);
})

app.listen(3000, ()=>
console.log(`server is running on ${port}`)

);