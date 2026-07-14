let heroi = "tulio";

let xp = 2900;

if (xp < 1000){
    console.log("O herói " + heroi + " está no tier de ferro.");
}else if (xp >= 1001 && xp < 2000){
    console.log("O herói " + heroi + " está no tier de bronze.");
}else if (xp >= 2001 && xp < 5000){
    console.log("O herói " + heroi + " está no tier de prata.");
}else if (xp >= 5001 && xp < 6000){
    console.log("O herói " + heroi + " está no tier de ouro.");
}else if (xp >= 6001 && xp < 7000){
    console.log("O herói " + heroi + " está no tier de platina.");
}else if (xp >= 7001 && xp < 8000){
    console.log("O herói " + heroi + " está no tier de diamante.");
}else if (xp >= 8001 && xp < 9000){
    console.log("O herói " + heroi + " está no tier de ascendete.");
}else if (xp >= 9001 && xp < 10000){   
    console.log("O herói " + heroi + " está no tier de imortal.");
}else if (xp >= 10001){
    console.log("O herói " + heroi + " está no tier de supremo.");
}