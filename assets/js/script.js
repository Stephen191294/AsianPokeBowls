new WOW().init();


function showSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex"

}


function hideSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none"

}











document.addEventListener('DOMContentLoaded', () => {
  const hoverBox = document.querySelector('.box-1');
  const icon = document.getElementById('icon');

  hoverBox.addEventListener('mouseover', () => {
    icon.style.color = '#ffffff'; 
  });

  hoverBox.addEventListener('mouseout', () => {
    icon.style.color = '#000000'; 
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const hoverBox = document.querySelector('.box-2');
  const icon = document.getElementById('icon-2');

  hoverBox.addEventListener('mouseover', () => {
    icon.style.color = '#ffffff'; 
  });

  hoverBox.addEventListener('mouseout', () => {
    icon.style.color = '#000000'; 
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const hoverBox = document.querySelector('.box-3');
  const icon = document.getElementById('icon-3');

  hoverBox.addEventListener('mouseover', () => {
    icon.style.color = '#ffffff'; 
  });

  hoverBox.addEventListener('mouseout', () => {
    icon.style.color = '#000000'; 
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const hoverBox = document.querySelector('.box-4');
  const icon = document.getElementById('icon-4');

  hoverBox.addEventListener('mouseover', () => {
    icon.style.color = '#ffffff'; 
  });

  hoverBox.addEventListener('mouseout', () => {
    icon.style.color = '#000000'; 
  });
});