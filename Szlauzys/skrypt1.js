const imiona = ["maciek", "filip", "szymon", "pawel", "ida"];

alert("Liczba imion: "+imiona.length);

//1
document.write(imiona.join("; "));
document.write("<br>");

//2
let text = "";
for (let x in imiona) {
  text += imiona[x]+", ";
}
document.write(text+"<br>");

//3
for(let wartosc of imiona){
    document.write(wartosc+", ")
};
document.write("<br>")

//4
for(let i=0; i<imiona.length; i++){
    document.write(imiona[i]+", ")
};