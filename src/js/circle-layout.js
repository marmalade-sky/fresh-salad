const page = document.querySelector('html');
const team = document.querySelector('.team');
const employeeList = document.querySelectorAll('.employee');

employeeList.forEach((employee) => {
  let snapshot = employee.querySelector('.snapshot');
  let info = employee.querySelector('.info');
  let close = employee.querySelector('.close');

  let rotatedeg = Math.floor(Math.random() * 360);

  snapshot.addEventListener('click', () => {
    page.style.overflow = "hidden";
    info.classList.add('is-active')
    team.style.marginRight ="17px";
  });

  close.addEventListener('click', () =>{
    page.removeAttribute('style');
    info.classList.remove('is-active')
    team.removeAttribute('style');
  });
});