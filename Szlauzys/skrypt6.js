

//NIE DOKONCZONE


/*
const n=10;
let tablica=[], liczba, min, max;

//losowanie
for(let i=0; i<n; i++){
    liczba=Math.floor(Math.random() * -100);
    tablica.push(liczba)
}

//najmniejsza najwieksza liczba
for(let i=0; i<tablica.length;i++){
}
*/

const n=10;
const liczby = [];
let min = liczby[0];
let max = liczby[0];
let liczba;

for(let i=0; i<n; i++){
    liczba=Math.floor(Math.random() * -100);
    liczby.push(liczba)
}

//najmniejsza liczba//
for(let i=1; i<liczby.length; i++){
    if(liczby[i]<min){
        min = liczby[i];
    }
}

//najwieksza liczba//
for(let i=1; i<liczby.length; i++){
    if(liczby[i]>max){
        max = liczby[i]
    }
}

document.write("Tablica = "+liczby+"<br>")
document.write("Najmniejsza liczba to: "+min+"<br>")
document.write("Najwieksza liczba to: "+max)


//alert("Tablica wynosi: "+tablica+"\nNajmniejsza liczba to: "+min)

