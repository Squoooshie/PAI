

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
//jeśli chcesz dopisywać do listy elementy nie powinienneś deklarować jej za pomocą const
//to nie jest tablica n elementowa, poprawna deklaracja let liczby = [n];
let min = liczby[0];
let max = liczby[0];
let liczba;

for(let i=0; i<n; i++){
    liczba=Math.floor(Math.random() * -100);
    liczby.push(liczba)//brak ;
}

//najmniejsza liczba
for(let i=1; i<liczby.length; i++){
    if(liczby[i]<min){
        min = liczby[i];
    }
}

//najwieksza liczba
for(let i=1; i<liczby.length; i++){
    if(liczby[i]>max){
        max = liczby[i]//brak ;
    }
}

document.write("Tablica = "+liczby+"<br>")//brak ;
document.write("Najmniejsza liczba to: "+min+"<br>")//brak ;
document.write("Najwieksza liczba to: "+max)//brak ;
//wypisujesz w oknie przeglądarki, a nie w oknie alert

//alert("Tablica wynosi: "+tablica+"\nPosortowana tablica: "+liczby.sort((a,b)=>a-b)+"\nNajmniejsza liczba to: "+min+", największ liczba to: "+max);

//sortowanie licz rosnąco
//liczby.sort((a,b)=>a-b);