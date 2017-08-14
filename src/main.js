'usr strict';

import './main.scss';

let items = document.querySelectorAll('.item');

for (let item of items) {
  item.addEventListener('click', () => {
    let className = item.className;
    if (className.includes('active')) {
      item.className = 'item';
    } else {
      let activeItems = document.querySelectorAll('.active');
      if (activeItems && activeItems.length === 2) {
        activeItems[Math.floor((Math.random() * 2))].className = 'item';
      }
      item.className = 'active item';
    }
  });
}
