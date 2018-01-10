const price = (a,b)=>{
    if(a.toString().indexOf(".")!=-1||b.toString().indexOf(".")!=-1){
        return parseFloat(a*b);
    }else{
        var str=(a*b)+".00";
        return str
    }
    
}

export default price;