console.log("HELLO");

//setInterval will call a function every Nms
const slideShowImage = document.getElementById("slide-show-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("Click", () =>{
updateImage("next");
});
nextButton.addEventListener("Click", () =>{
    updateImage("prev");
});
let count = 0;

function printCountAndIncrment(){
    count++;
    console.log(count);
}

// call our function every 3 seconds
setInterval(printCountAndIncrment, 3000);

let imageUrls = [
    "./images/bullDog1.jpg" ,
    "https://www.thesprucepets.com/thmb/KRKdZVYGjYWSIaFfSrdutZolwAc=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/AleksandrZotovAmericanBulldog-c717bec4805c43fab4c61f91da5f9d93.jpg" ,
    "https://best-family-dogs.com/wp-content/uploads/2020/09/English-Bulldog.jpg" ,
    
];

//replace the first with the 2nd the 2nd to 3rd then back to first

// use setInveral to update the image every 3 seconds

let currentImageIndex = 0;

//move to the next image
//update the dom
//keep track of the current index
function updateImage(direction){
    if(direction == "next"){
    currentImageIndex++;
    }else if(direction == "prev"){
        currentImageIndex--;
    }else{
        currentImageIndex++;
    }
    if(currentImageIndex > imageUrls.length){
        currentImageIndex = 0;
    }
    
    slideShowImage.src = imageUrls[currentImageIndex];

}

setInterval(updateImage("next"), 3000);