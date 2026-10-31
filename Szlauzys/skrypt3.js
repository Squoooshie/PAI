const a=-100, b=30;
let n, losowe2=[], liczba;

do{
    do{
        n=Math.floor(Math.random()*(b-a+1)+a)//brak ;
    }while(n<0)//brak ;

    for(let i=0; i<n; i++){
        liczba=(Math.floor(Math.random()*(b-a+1)+a))
        if(liczba%2==0) losowe2.push(liczba)//powinny być klamry
    };//za klamrami pętli nie dajemy ;
    //nie losujesz n razy ale nie n wartości parzystych, ponieważ nie każda wylosowana liczba jest dodatnia

    alert(losowe2.join(";  "))//brak ;
}while(confirm("Powtorzyc?"))//brak ;


//poprawione
do{
    do{
        n=Math.floor(Math.random()*(b-a+1)+a);
    }while(n<0);

    for(let i=0; i<n; i++){
        do{
            liczba=(Math.floor(Math.random()*(b-a+1)+a));
        }while(liczba%2!=0);
        //będzie losował do momentu, gdy liczba będzie parzysta
        losowe2.push(liczba);
    }

    alert(losowe2.join(";  "));
}while(confirm("Powtorzyc?"));
