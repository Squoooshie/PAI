const a=-50, b=50;
let stop, losowe3=[], liczba;

stop=Math.floor(Math.random()*(b-a+1)+a);
document.write("Wylosowana liczba to: "+stop)

do{
    liczba=Math.floor(Math.random()*(b-a+1)+a)
    losowe3.push(liczba)
}while(liczba!=stop);

alert("Wylosowano liczbe "+stop+" z zakresu ["+a+", "+b+"]"+"\nLiczby z tej tablicy: "+losowe3.join(", ")+"\nLiczba wartosci w tablicy: "+losowe3.length)