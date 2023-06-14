const echoDiv = function (a, b){
    let s = Number.parseInt(a/b,10);
    let e = a%b;
    return "商: "+s+", 余り: "+e+""; 
};

const reply = function(a){
    if(a===undefined) return "返信なし";
    else return a;
};

module.exports = { echoDiv, reply };

