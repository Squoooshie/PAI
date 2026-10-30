const a=-50, b=50;
let n=10, tablica1=[], nieparzyste=[], ujemne=[];

for(let i=0; i<n; i++){
    tablica1.push(Math.floor(Math.random()*(b-a+1)+a))
};

//tablica
document.write("Tablica: ")
for(let wartosc of tablica1){
    document.write(wartosc+", ")
};

//nieparzyste
for(let wartosc of tablica1){
    if(wartosc%2!==0){
        nieparzyste.push(wartosc)
    }
};

document.write("<br>Nieparzystych liczb jest "+nieparzyste.length+": ");
for(let wartosc of nieparzyste){
    document.write(wartosc+", ")
};

//ujemne
for(let wartosc of tablica1){
    if(wartosc<0){
        ujemne.push(wartosc)
    }
};

document.write("<br>Ujemnych liczb jest "+ujemne.length+": ");
for(let wartosc of ujemne){
    document.write(wartosc+", ")
};

