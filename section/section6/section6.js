const sum = function(a,b){
    if(a>b){
        let ex = a;
        a = b;
        b = ex;
    }
    let sum_f=0;
    for(let c=a;c<=b;c++){
        sum_f += c;
    }
    return sum_f
};

module.exports = { sum };
