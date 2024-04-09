var figlet = require("figlet");

figlet("Ravi Singh From  Kiet ",  (err, data) =>{
  if (err) {
    console.log("Data not available");
    console.dir(err);
    return;
  }
  console.log(data);
});