//DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//show AM or Pm
const showAmPm = true;

//Show time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //set Am or Pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000);       
}
//add zero

function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}


//set background and greeting
function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();    
    
    if(hour < 12){
        //morning
        document.body.style.backgroundImage = "url('../imgs/morning.jpg')";
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Morning,';
    }
    else if(hour < 18){
        //afternoon
        document.body.style.backgroundImage = "url('../imgs/afternoon.jpg')";
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Afetrnoon,';
    }
    else {
        //evening
        document.body.style.backgroundImage = "url('../imgs/afternoon.jpg')" ;
        document.body.style.backgroundSize = "100%";
        greeting.textContent = 'Good Evening,';
        document.body.style.color = 'white';
    }
}

//get name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }
    else{
        name.textContent = localStorage.getItem('name');
    }
}

//set Name
function setName(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}

//get focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter your todays focus]';
    }
    // else if(localStorage.getItem('focus') === 'love'){
    //     displayImg();
    // }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}

//set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }
    else{ 
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//Run
showTime();
setBgGreet();
getName();
getFocus();


