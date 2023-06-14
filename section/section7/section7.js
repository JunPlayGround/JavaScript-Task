const character = {
    id : 1 ,
    name : "スライム" ,
    hp : 50
};

const addMP = function(a){
    character.mp=a;
    return character;
};

const updateHP = function(){
    delete character.mp;
    character.hp=character.hp-15;
    return character;
};

const LookUpName = function(){
    return character.name;
};

module.exports = { character, addMP, updateHP, LookUpName };
