var header = document.getElementById('header');
var headerLinks = document.querySelectorAll('.nav-link');
var headerLogoImageLight = document.querySelector('.header-image-device-light');
var headerLogoImageDark = document.querySelector('.header-image-device-dark');
var headerSocialMedia = document.querySelectorAll('.social-media li');

window.onscroll = function(){
    var scroll = document.body.scrollTop;
    if(scroll > 0){
        header.style.backgroundColor = "#fff";
        headerLinks.forEach(function(item){
            console.log(headerLinks)
            item.classList.add('scrollColor');
        })
        headerSocialMedia.forEach(function(item){
            console.log(headerLinks)
            item.style.color = "#000";
        })
        headerLogoImageLight.style.display = "none";
        headerLogoImageDark.style.display = "block";
    }
    else{
        header.style.backgroundColor = "transparent";
        headerLinks.forEach(function(item){
            console.log(headerLinks)
            item.classList.remove('scrollColor');
        })
        headerSocialMedia.forEach(function(item){
            console.log(headerLinks)
            item.style.color = "#fff";
        })
        headerLogoImageLight.style.display = "block";
        headerLogoImageDark.style.display = "none";

    }
}