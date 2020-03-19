//DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//Show Time
function showTime()
{
	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();

	//Set AM or PM
	const ampm = hour >= 12 ? 'PM' : 'AM';

	//12 hour format
	hour = hour % 12 || 12;

	//Output the time
	time.innerHTML = `${hour}<span>:</span>${addZeros(min)}<span>:</span>${addZeros(sec)} ${ampm}`;

	setTimeout(showTime, 1000);
}

//Add zeros
function addZeros(n)
{

	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Background and Greeting
function setBgGreet()
{
	let today = new Date();
	let hour = today.getHours();

	if(hour < 12)
	{
		//Morning
		document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
		greeting.textContent = 'Good Morning';
	}
	else if(hour < 18)
	{
		//Afternoon
		document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
		greeting.textContent = 'Good Afternoon';
	}
	else
	{
		//Night
		document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
		greeting.textContent = 'Good Evening';
		document.body.style.color = 'white';
	}
}

//Get name
function getName()
{
	if(localStorage.getItem('name') === null)
	{
		name.textContent = '[Enter Name]';
	}
	else
	{
		name.textContent = localStorage.getItem('name');
	}
}

function setName(e)
{
	if(e.type === 'keypress')
	{
		//Make sure Enter is pressed
		if(e.which == 13 || e.keyCode == 13)
		{
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
	}
	else
	{
		localStorage.setItem('name', e.target.innerText);
	}
}

//Get focus
function getFocus()
{
	if(localStorage.getItem('focus') === null)
	{
		focus.textContent = '[Enter Focus]';
	}
	else
	{
		focus.textContent = localStorage.getItem('focus');
	}
}

function setFocus(e)
{
	if(e.type === 'keypress')
	{
		//Make sure Enter is pressed
		if(e.which == 13 || e.keyCode == 13)
		{
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
	}
	else
	{
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