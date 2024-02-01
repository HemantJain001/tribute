var numberOfElements = 6;
for(var i=0;i<=numberOfElements;i++){
    dropdown(i);
}

function dropdown(num){
    document.querySelectorAll(".timeline h2")[num].addEventListener("click",function (){
        document.querySelectorAll(".timeline p")[num].classList.toggle("display-none");
    });
}