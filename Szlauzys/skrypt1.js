const imiona = ["maciek", "filip", "szymon", "pawel", "ida"];

alert("Liczba imion: "+imiona.length);
//Alert jest oknem dialogowym, do wyświetlenia w oknie przeglądarki służy document.write()


//1
document.write(imiona.join("; "));
document.write("<br>");

//2
let text = "";
for (let x in imiona) {
  text += imiona[x]+", ";
}
document.write(text+"<br>");
//kod zadziała, ale Szlauzys wymaga by document.write() był w ciale pętli tak jak ponizej
/*
for(let x in imiona){
    document.write(imiona[x]+", ");
}
*/


//3
for(let wartosc of imiona){
    document.write(wartosc+", ")
};//po instrukcjach warunkowych nie dajemy ;
document.write("<br>")
//działa, za document.write() powinien być ;


//4
for(let i=0; i<imiona.length; i++){
    document.write(imiona[i]+", ")
};//po instrukcjach warunkowych nie dajemy ;
//działa, za document.write() powinien być ;
