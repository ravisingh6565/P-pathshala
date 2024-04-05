// const firstNameChange = (e)=>{
// console.log(e);
// const val = e.target.value;
// if (val.length>3) {
//     console.log("correct");
// }
// }

const res = {
    hobbies:[],
};

function submitForm(e){

    
    e.preventDefault();
   const t =e.target
   for(let i=0;i<t.length;i++){
    // console.dir(t[i].value);
    // console.dir(t[i]);
    // const inp = t[i];
    // console.log(t[i].type);
    // console.log(t[i].value);
    const ty = t[i].type;
    const vl = t[i].value;
    const nm = t[i].name;

    // console.log(nm, ty,vl);
    // res[nm] = vl;
    // if(ty=='checkbox'){
    //     console.log(t[i].checked);
    // }
    
    if(ty!='submit'){
        // res[nm] = vl;

                if(ty=='checkbox' && t[i].checked){
                    res.hobbies.push(vl);
                }
                if(ty!='checkbox'){
                    res[nm] = vl;
                }
    }
}
console.log(res);
 }

