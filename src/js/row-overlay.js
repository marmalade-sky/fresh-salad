const body = document.querySelector('html');
const team = document.querySelector('.team');
let employeeList = document.querySelectorAll('.bio');
let employeeOverlay = document.querySelector('.overlay');
let windowSize = getRealWidth();
let documentSize = body.offsetWidth;

function getRealWidth() {
  let windowWidth = 0;
    if (typeof(window.innerWidth) == 'number') {
    windowWidth = window.innerWidth;
    }
      else {  
        if (document.documentElement && document.documentElement.clientWidth){
          windowWidth = document.documentElement.clientWidth;
        }
        else {
          if (document.body && document.body.clientWidth) {
            windowWidth = document.body.clientWidth;
        }
      }
    }
  return windowWidth;
}

getRealWidth();

resetClass = () => {
  for (employee of employeeList) {
    employee.classList.remove('is-active');
  }
}

employeeList.forEach((employee) => {
  let headshot = employee.querySelector('img');
  let close = employee.querySelector('.close');

  headshot.addEventListener('click', () => {
    // body.style.overflow = "hidden"
    // team.style.marginRight = `${windowSize - documentSize}px`

    if (!employee.classList.contains('is-active')) {
      resetClass();
    }
    employee.classList.add('is-active');
  });

  close.addEventListener('click', () =>{
    employee.classList.remove('is-active');
    // body.style.removeProperty('overflow');
    // team.style.removeProperty('margin-right');
  });

 
});

employeeOverlay.addEventListener('click', () => {
  resetClass();
  body.style.removeProperty('overflow');
  team.style.removeProperty('margin-right');
})