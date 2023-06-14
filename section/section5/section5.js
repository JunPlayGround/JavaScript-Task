const score = function(a){
    if(80<=a && a<=100) return "合格";
    else if(60<=a && a<80) return "追試";
    else if(0<=a && a<60) return "不合格";
    else if(a === undefined) return "後日受験";
    else return "0以上100未満の数字を入れてください"
};

module.exports = { score };
