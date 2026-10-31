let miesiace=["styczen", "luty", "marzec", "kwieceien", "maj", "czerwiec", "lipiec", "sierpien", "wrzesien", "pazdziernik", "listopad", "grudzien"];
let dni=["niedziela", "poniedzialek", "wtorek", "sroda", "czwartek", "piatek", "sobota"];
let liczba_miesiac, liczba_tydzien;

do{
liczba_miesiac=Math.floor(Math.random() * 12) + 1;
liczba_tydzien=Math.floor(Math.random() * 7) + 1;

alert("Wylosowana liczba miesiaca to: "+liczba_miesiac+" czyli "+miesiace[--liczba_miesiac]+"\nWylosowana liczba tygodnia to: "+liczba_tydzien+" czyli "+dni[--liczba_tydzien]);
}while(confirm("Czy jeszcze raz?"))//brak ;