const overlayHide = document.querySelector('.overlayHide')
const menuIcon = document.querySelector('.menuIcon')
const iconContainer = document.querySelector('.iconContainer')
const projectBackPopHide = document.querySelector('.projectBackPopHide')
const projectBack = document.querySelector('.projectTopConDiv button');
const projectBackPopUp =  document.querySelector('.projectBackPopUp')
const bookmarkIcon = document.querySelector('.bookmarkIcon')
const bookmarkSpan = document.querySelector('.bookmark span')
const bookmark = document.querySelector('.bookmark')
const pledgePopUp = document.querySelector('.pledgePopUp')
const pledgeButton = document.querySelector('.pledgePopUp button')
const form1 = document.querySelector('.form1')
const form2 = document.querySelector('.form2')
const form3 = document.querySelector('.form3')
const form4 = document.querySelector('.form4')
let h41 = document.querySelector('.h41') 
let h42 = document.querySelector('.h42') 
let h43 = document.querySelector('.h43') 
let h44 = document.querySelector('.h44') 
const closePopUp = document.querySelector('.close')
const pledgeChoice = document.querySelectorAll('.standPopUp')
const submit1 = document.querySelector('.submit1')
const submit2 = document.querySelector('.submit2')
const submit3 = document.querySelector('.submit3')
const submit4 = document.querySelector('.submit4')


/*SHOW POP-UP OPTIONS WHEN 'BACK THIS PROJECT IS CLICKED' */
projectBack.addEventListener('click', showprojectPop)
function showprojectPop() {
    overlayHide.style.display = "block"
    projectBackPopUp.style.display = "block"
 }

/*CLOSE POP-UP NOTIFICATION FOR 'BACK THIS PROJECT BUTTON' */
closePopUp.addEventListener('click', closePop)
function closePop() {
projectBackPopHide.style.display = "none"
overlayHide.style.display = "none"
}


bookmark.addEventListener('click', bookmarked) 
function bookmarked() {
    bookmarkIcon.src = ''
    bookmarkIcon.src = 'images/icon-bookmark-click.svg'
    bookmarkSpan.textContent = 'Bookmarked'
    bookmarkSpan.style.color = 'hsl(176, 72%, 28%)'
    bookmark.style.width = 'auto'
}


pledgeButton.addEventListener('click', pledgeClose)
function pledgeClose() {
    overlayHide.style.display = "none"
    document.querySelector('.pledgePopUpHide').style.display = "none"
}

/*SHOW FORM PART FOR EACH POP-UP*/
h41.addEventListener('click', showForm1)
function showForm1() {
    document.querySelector('.listMid1').classList.toggle('removeMidColor')
    document.querySelector('.standPop1').classList.toggle('standPopBorder')
    form1.classList.toggle('formHide')
}
h42.addEventListener('click', showForm2)
function showForm2() {
    document.querySelector('.listMid2').classList.toggle('removeMidColor')
    document.querySelector('.standPop2').classList.toggle('standPopBorder')
    form2.classList.toggle('formHide')
}
h43.addEventListener('click', showForm3)
function showForm3() {
    document.querySelector('.listMid3').classList.toggle('removeMidColor')
    document.querySelector('.standPop3').classList.toggle('standPopBorder')
    form3.classList.toggle('formHide')
}
h44.addEventListener('click', showForm4)
function showForm4() {
    document.querySelector('.listMid4').classList.toggle('removeMidColor')
    document.querySelector('.specialPop').classList.toggle('standPopBorder')
    form4.classList.toggle('formHide')
}

submit1.addEventListener('click', submitOne)
function submitOne() {
    projectBackPopHide.style.display = "none"
    document.querySelector('.listMid1').classList.toggle('removeMidColor')
    document.querySelector('.standPop1').classList.toggle('standPopBorder')
    form1.classList.add('formHide')
    document.querySelector('.progress1').style.backgroundColor = 'hsl(176, 50%, 47%)'
    document.querySelector('.pledgePopUpHide').style.display = 'block'
}
submit2.addEventListener('click', submitTwo)
function submitTwo() {
    projectBackPopHide.style.display = "none"
    document.querySelector('.listMid2').classList.toggle('removeMidColor')
    document.querySelector('.standPop2').classList.toggle('standPopBorder')
    form2.classList.add('formHide')
    document.querySelectorAll('.progress1, .progress2, .progress3').forEach( bar => bar.style.backgroundColor = 'hsl(176, 50%, 47%)')
    document.querySelector('.pledgePopUpHide').style.display = 'block'
}
submit3.addEventListener('click', submitThree)
function submitThree() {
    projectBackPopHide.style.display = "none"
    document.querySelector('.listMid3').classList.toggle('removeMidColor')
    document.querySelector('.standPop3').classList.toggle('standPopBorder')
    form3.classList.add('formHide')
    document.querySelectorAll('.progress1, .progress2, .progress3, .progress4, .progress5, .progress6').forEach( bar => bar.style.backgroundColor = 'hsl(176, 50%, 47%)' )
    document.querySelector('.pledgePopUpHide').style.display = 'block'
}
submit4.addEventListener('click', submitFour)
function submitFour() {
    projectBackPopHide.style.display = "none"
    document.querySelector('.listMid4').classList.toggle('removeMidColor')
    document.querySelector('.specialPop').classList.toggle('standPopBorder')
    form4.classList.add('formHide')
    document.querySelectorAll('.progress1, .progress2, .progress3, .progress4, .progress5, .progress6, .progress7, .progress8, .progress9, .progress10').forEach( bar => bar.style.backgroundColor = 'hsl(176, 50%, 47%)' )
    document.querySelector('.pledgePopUpHide').style.display = 'block'
}


/*MENU OPTION FOR MOBILE SCREEN SIZE */
menuIcon.addEventListener('click', menu)
function menu() {
    if(document.querySelector('ul').style.visibility === 'visible' ) {
        document.querySelector('ul').style.visibility = 'hidden'
        overlayHide.style.display = "none"
        menuIcon.style.zIndex = '1'
        menuIcon.src = "images/icon-hamburger.svg"
    }else {
        document.querySelector('ul').style.visibility = 'visible'
        overlayHide.style.display = "block"
        document.querySelector('header span').style.zIndex = '3'
        menuIcon.style.zIndex = '3'
        menuIcon.src = "images/icon-close-menu.svg"
    }
}
