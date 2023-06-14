const firstIndex = function(a){
  return a[0];
};
const countArrayLength = function(b){
  if(!Array.isArray(b)){
    return "これは配列ではありません";
  }else if (b.length === 0) {
    return "この配列は空配列です";
  }else{
    return "この配列は"+b.length+"個のデータを持っています";
  }
};

const extractArray = function(c){
  if(c.length < 2){
    return [];
  }else if (c.length === 2) {
    return [c[1]];
  }else if (c.length > 2){
    return [c[1],c[2]];
  }
};

const makeMark = function(d,e){
  let h=[];
  for (let g = 0; g < e; g++) {
    h.push(d);    
  }
  return h;
};

const onlyString = function(i){
  let j =[];
  for (let k = 0; k < i.length; k++) {
    if (typeof(i[k]) === "string") {
      j.push(i[k]);
    }
  }
  return j;
};

const addNumber = function(l){
  let m =[];
  for (let n = 0; n < l.length; n++) {
    m.push(n+1 + ": "+l[n]);
  }
  return m;
};

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};
