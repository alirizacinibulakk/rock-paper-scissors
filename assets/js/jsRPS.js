/////           TAŞ KAĞIT MAKAS OYUNU           /////

let userMove = prompt("TAŞ-KAĞIT-MAKAS oyununa hoşgeldiniz!\nLütfen hamlenizi giriniz: ");
let bilgisayarinHamlesi = ["taş" , "kağıt" , "makas" ].at(Math.floor(Math.random() * 3));
if(userMove === "taş" || userMove === "kağıt" || userMove === "makas"){
    if((userMove === "taş" && bilgisayarinHamlesi === "makas") || (userMove === "kağıt" && bilgisayarinHamlesi === "taş") || (userMove === "makas" && bilgisayarinHamlesi === "kağıt")){
        alert("Bilgisayarın Hamlesi: " + bilgisayarinHamlesi + "\nTebrikler, kazandınız!");
    }else if((userMove === "taş" && bilgisayarinHamlesi === "kağıt") || (userMove === "kağıt" && bilgisayarinHamlesi === "makas") || (userMove === "makas" && bilgisayarinHamlesi === "taş")){
        alert("Bilgisayarın Hamlesi: " + bilgisayarinHamlesi + "\nÜzgünüm :( , kaybettiniz..");
    }else if(userMove === bilgisayarinHamlesi){
        alert("Bilgisayarın Hamlesi: " + bilgisayarinHamlesi + "\nBerabere!");
    }
}else{
    alert("Lütfen geçerli bir hamle giriniz..");
}
