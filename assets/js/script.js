document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('fadeElement');
  fadeIn(element, 2000); 
});

function fadeIn(element, duration) {
  let opacity = 0;
  const interval = 50;
  const increment = interval / duration;

  const fade = setInterval(() => {
      opacity += increment;
      if (opacity >= 1) {
          clearInterval(fade);
          opacity = 1; 
      }
      element.style.opacity = opacity;
  }, interval);
};



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