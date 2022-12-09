const page = document.querySelector('html');
const team = document.querySelector('.team');
const employeeList = document.querySelectorAll('.employee');

let pageWidth = document.querySelector('html').offsetWidth;
let scrollWidth;

employeeList.forEach((employee) => {
  let snapshot = employee.querySelector('.snapshot');
  let info = employee.querySelector('.info');
  let close = employee.querySelector('.close');

  snapshot.addEventListener('click', () => {
    page.classList.add('modal-open');
    info.classList.add('is-active');

    scrollWidth = document.querySelector('html').offsetWidth - pageWidth;
    team.style.marginRight = `${scrollWidth}px`;

    console.log(scrollWidth)
  });

  close.addEventListener('click', () =>{
    info.classList.remove('is-active');

    setTimeout(() => {
      team.removeAttribute('style');
      page.classList.remove('modal-open');    
    }, "300")
    
  });
});