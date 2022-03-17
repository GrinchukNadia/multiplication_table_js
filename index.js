const container = document.querySelector('.cards');
const navElem = document.querySelector('.nav');
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const defaultInit = (arr) => {
  container.innerHTML = arr[0].join('');
  navItemElems[0].classList.toggle('active')
};

// const createTable = (num) =>
//   Array(10)
//     .fill()
//     .reduce((acc, _, i) => {
//       return [
//         ...acc,
//         `<div data-cart="card" class="card">
//         <div class="front"><span>${num}x${i + 1}</span></div>
//         <div class="back"><span>${num * (i + 1)}</span></div>
//       </div>`,
//       ];
//     }, []);

// const mathTableElems = numbers.map((el) => {
//   return createTable(el);
// });


const navElems = numbers.map(
  (el) => `<div data-nav="${el}" class="nav_item">${el}</div>`
);

navElem.innerHTML = navElems.join('');
const navItemElems = navElem.querySelectorAll('.nav_item');

const navigationFn = () => {
  navElem.addEventListener('click', (event) => {
    const target = event.target.dataset.nav;
    if (!target) {
      return;
    }
    container.innerHTML = mathTableElems[+target - 1].join('');

    navItemElems.forEach(el => {
      if(el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })
    navItemElems[+target - 1].classList.add('active')
  });
};

const rotateCards = container.addEventListener('click', (event) => {
  const isCard = event.target.closest('.card');
  if (!isCard) {
    return;
  }
  isCard.classList.toggle('rotate');
});

navigationFn();
defaultInit(mathTableElems)