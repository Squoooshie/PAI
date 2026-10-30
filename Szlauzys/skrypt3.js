const a=-100, b=30;
let n, losowe2=[], liczba;

do{
    do{
        n=Math.floor(Math.random()*(b-a+1)+a)
    }while(n<0)

    for(let i=0; i<n; i++){
        liczba=(Math.floor(Math.random()*(b-a+1)+a))
        if(liczba%2==0) losowe2.push(liczba)
    };

    alert(losowe2.join(";  "))
}while(confirm("Powtorzyc?"))
