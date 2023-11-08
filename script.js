


// let watchImg = document.getElementById("img");
let watchImg = document.getElementById("bg-img");

displayCurrTime();

function displayCurrTime(){
const currentDate = new Date();
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();

watchImg.innerText= (`${currentHour}:${currentMinute}`);

}


let redColor = document.getElementById("red-color");
let blackColor = document.getElementById("black-color");
let brownColor = document.getElementById("brown-color");
let pinkColor = document.getElementById("pink-color");
let purpleColor = document.getElementById("purple-color");

let arabicBtn = document.getElementById("AR");
let englishBtn = document.getElementById("EN");

let nav = document.getElementById("nav");
let container = document.getElementById("container-div");
let cardInfo = document.getElementById("card-info");


arabicBtn.addEventListener("click",()=>{
    nav.style.direction="rtl";
    container.style.direction="rtl";
    cardInfo.style.direction="rtl";

    document.getElementById("title").innerText = "متجر ساعتي";
    document.getElementById("card-title").innerHTML = "ساعة ابل";
    document.getElementById("card-text").innerHTML = "ساعة ذكية يمكن ارتداؤها تتيح للمستخدمين إنجاز مجموعة متنوعة من المهام، بما في ذلك إجراء المكالمات الهاتفية وإرسال الرسائل النصية وقراءة البريد الإلكتروني.";
    document.getElementById("choose").innerHTML = "اختر اللون :";
    document.getElementById("addBtn").innerHTML = "أضف إلى السلة";
    
})


redColor.addEventListener("click",()=>{
    watchImg.style.backgroundImage= "url('red.png')"
    // watchImg.src="red.png"
})

blackColor.addEventListener("click",()=>{
    watchImg.style.backgroundImage= "url('black.png')"
    // watchImg.src="black.png"
})

brownColor.addEventListener("click",()=>{
    watchImg.style.backgroundImage= "url('brown.png')"
    // watchImg.src="brown.png"
})

pinkColor.addEventListener("click",()=>{
    watchImg.style.backgroundImage= "url('pink.png')"
    // watchImg.src="pink.png"
})

purpleColor.addEventListener("click",()=>{
    watchImg.style.backgroundImage= "url('purple.png')"
    // watchImg.src="purple.png"
})
