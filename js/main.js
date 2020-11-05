function myfunction(id, count) {
    document.getElementById(id).style.display = "none";
    switch (count) {
        case 0:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-Ganjdundwara, Kasganj.</span>";
            break;
        case 1:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-Studying at Sanskriti University.</span>";
            break;
        case 2:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-Mathematics.</span>";
            break;
        case 3:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-Her Father.</span>";
            break;
        case 4:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-She would like not to expose her weakness!</span>";
            break;
        case 5:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>Company	: IGT Solutions, Gurugram</span><br><span>Department  : Python Development</span><br><span>Duration	: 6 weeks(17June 2019-26 July 2019)</span>";
            break;
        case 6:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>['Writing quotes', 'Photography', 'Gardening', 'Art & Craft']<span>";
            break;
        default:
            break;
    }

}

























// const toggle= document.querySelector('.toggle');
// let toggleOpen=false;
// toggle.addEventListener('click',()=>{
//     if(!toggleOpen){
//         toggle.classList.add('open');
//         toggleOpen=true;
//     }
//     else{
//         toggle.classList.remove('open');
//         toggleOpen=false;  
//     }
// });




// var typed = new Typed(".typings", {
//     strings: ["YouTuber", "Programmer","fjkhe"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });
