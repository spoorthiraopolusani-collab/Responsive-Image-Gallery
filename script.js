let images = document.querySelectorAll(".gallery img");

let current = 0;

function openLightbox(index){

    current = index;

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightbox-img").src=images[current].src;

}

function closeLightbox(){

    document.getElementById("lightbox").style.display="none";

}

function changeSlide(step){

    current += step;

    if(current<0){
        current=images.length-1;
    }

    if(current>=images.length){
        current=0;
    }

    document.getElementById("lightbox-img").src=images[current].src;

}

function filterSelection(category){

    let items=document.querySelectorAll(".image");

    items.forEach(function(item){

        if(category=="all"){

            item.classList.remove("hide");

        }

        else if(item.classList.contains(category)){

            item.classList.remove("hide");

        }

        else{

            item.classList.add("hide");

        }

    });

}