const a=-50, b=50;
let n=10, tablica1=[], nieparzyste=[], ujemne=[];
//w zadaniu podano nazwę tablicy losowe1 zamiast tablica1


for(let i=0; i<n; i++){
    tablica1.push(Math.floor(Math.random()*(b-a+1)+a))
};//po instrukcjach warunkowych nie dajemy ;
//dodawaj ; na koncu


//tablica
document.write("Tablica: ")
for(let wartosc of tablica1){
    document.write(wartosc+", ")
};//po instrukcjach warunkowych nie dajemy ;
//brak ; za document.write()


//nieparzyste
for(let wartosc of tablica1){
    if(wartosc%2!==0){
        nieparzyste.push(wartosc)
    }
};

document.write("<br>Nieparzystych liczb jest "+nieparzyste.length+": ");
for(let wartosc of nieparzyste){
    document.write(wartosc+", ")
};//po instrukcjach warunkowych nie dajemy ;
//brak ; po .push() i document.write()
//możesz odrazu wypisać wartości w oknie zamiast robić nową tablicę a zliczać przez inkrementację zmiennej suma
//prościej wypisać wartości tablicy za pomocą .join(), zajmie mniej miejsca, nie będzie przecinak po ostatnim elemencie
//document.write(nieparzyste.join(", "));


//ujemne
for(let wartosc of tablica1){
    if(wartosc<0){
        ujemne.push(wartosc)
    }
};//po instrukcjach warunkowych nie dajemy ;
//brak ; za .push()


document.write("<br>Ujemnych liczb jest "+ujemne.length+": ");
for(let wartosc of ujemne){
    document.write(wartosc+", ")
};
//Całość można było zrobic w jednej pętli wypisując wartości ujemne i zliczając ich sumę
/*
let suma = 0;

document.write("<br>Ujemne liczby w tablicy to: ");
for(let wartosc of tablica1){
    if(wartosc<0){
        suma+=wartosc;
        document.write(wartosc+", ");
    }
}
document.write(" ich suma wynosi: "+suma);
*/
