//?  1 ile 100 aerasinda bir sayi tut
//?  variables tanimlama
//?  Check butonuna basildiginda kontrolleri yap
//!  Eger inputtan tahmin girilmediyse kullaniciya uyari ver
//!  Eger rastgele sayi esitse inputan alinan sayidegerine
//?  tebrikler bildiniz
//?  sakli sayi =görünür
//!  eger rastgelesayi esit degilse inputtan alinan degere
//?  tahmin hakkini azalmali
//!  eger tahmin hakk >0 ise --------->
//!   inputtan alinan deger > rastgele sayidan büyük ise-> tahminini azalt : tahminini artir
//!  eger tahmin hakki < 0 degilse
//?  Üzgünüm kaybettiniz
//?  tekrar tusuna basinca oyunu basa al( tahmin hakkini düzelt,
//?  tekrar rastgele sayi üretmeli,kontrol tusunu tekrar aktif yapmaliyiz,
//?  sakli sayiya soru isareti  atamaliyiz,tahmin inputuna bos deger atamaliyiz,mesaji eski haline almaliyiz)


let randomNum = Math.floor(Math.random() * 100 + 1)
console.log(randomNum);


let hak = 5;

const kontrolBtn = document.querySelector(".kontrol-btn")
const tahmin = document.querySelector(".tahmin-input")
const message = document.querySelector(".msg")
const sakliNum = document.querySelector(".sakli-number")
let tahminHakki = document.querySelector(".hak")
const tekrarButonu = document.querySelector(".tekrar-btn")
let hakSayisi = document.querySelector(".hak")




kontrolBtn.addEventListener('click', () => {
    let tahminNum = Number(tahmin.value)

    
    if(!tahminNum){
        message.innerText = "1 ile 100 arasi bir sayi giriniz."
    }
    else if(randomNum === tahminNum){
        message.innerText = "Congratulations, You Won 🤩";
        message.style.color = "green";
        message.style.fontSize = "50px";
    
        sakliNum.textContent = randomNum

        kontrolBtn.disabled = true;
    
    }
    else{
        hak--;  
      
        if(hak > 0){
            tahminNum > randomNum ? (message.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> Increase`) : (message.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x" ></i> Decrease`);
        }
        else{
            if(hak === 0){
                kontrolBtn.disabled = true; 
            }

            message.innerText = "You Lost 😞";
            message.style.color = "red";
            message.style.fontSize = "50px";
            sakliNum.textContent = randomNum
        }
        tahminHakki.innerText -= 1;
        
    }
    tahmin.value = ""

    }
    )

    tekrarButonu.addEventListener('click', () => {
        
        randomNum = 
        hak = 5;
        hakSayisi.innerText = hak;
        randomNum = Math.floor(Math.random() * 100 + 1)
        console.log(randomNum);
        kontrolBtn.disabled = false;
        sakliNum.textContent = "?"
        tahmin.value = ""

    })
    const inputPlace = document.getElementById("input")

    inputPlace.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            event.preventDefault();
            kontrolBtn.click();
        }
      });               