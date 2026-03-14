const IMAGES = [

{url:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"},
{url:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
{url:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"},
{url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"},
{url:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"},
{url:"https://images.unsplash.com/photo-1525755662778-989d0524087e"},
{url:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},
{url:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327"},
{url:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"}

];

let currentImageIndex = 0;

function showImage(index){

const mainImage = document.getElementById("mainImage");

mainImage.src = IMAGES[index].url;

currentImageIndex = index;

}

function nextImage(){

currentImageIndex++;

if(currentImageIndex >= IMAGES.length){
currentImageIndex = 0;
}

showImage(currentImageIndex);

}

function prevImage(){

currentImageIndex--;

if(currentImageIndex < 0){
currentImageIndex = IMAGES.length - 1;
}

showImage(currentImageIndex);

}

function createThumbnails(){

const container = document.getElementById("galleryPreview");

IMAGES.forEach((img,index)=>{

container.innerHTML += `
<img src="${img.url}" class="preview-img"
onclick="showImage(${index})">
`;

});

}

createThumbnails();
showImage(0);