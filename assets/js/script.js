new WOW().init()

function showSidebar () {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar () {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

const menuBody = document.getElementById('menuPickUpBody')
const buildBowlBtn = document.getElementById('buildBowl')
const buildBowlBox = document.getElementById('BuildBowlBox')
const closeBtn = document.getElementById('closeBtn')

buildBowlBtn.addEventListener('click', () => {
  
  buildBowlBox.style.display = (buildBowlBox.style.display === 'none' || buildBowlBox.style.display === '') ? 'block' : 'none';
});

closeBtn.addEventListener('click', () => {
  
  buildBowlBox.style.display = 'none';
});

const loginBox = document.getElementById('loginBoxOne');
const signInButton = document.getElementById('signInBtn');
const loginCloseButton = document.getElementById('loginCloseBtn');

signInButton.addEventListener('click', () => {
  loginBox.style.display = 'flex';
});

loginCloseButton.addEventListener('click', () => {
  loginBox.style.display = 'none';
});