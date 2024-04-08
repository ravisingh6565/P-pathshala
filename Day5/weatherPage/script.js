function fetchAPI(){
    const url = 'b1b15e88fa797225412429c1c50c122a1">api.openweathermap.org/data/2.5/forecast?id&appid=db4ec96e4fe188436e9ffd71fb7c2ef6';
    fetch(url)
    .then((res)=>
        res.json())
        .then(console.log);
    
}

fetchAPI();