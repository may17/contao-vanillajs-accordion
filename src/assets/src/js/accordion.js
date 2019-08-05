const getHeight = accordion => {
    accordion.style.display = 'block'; // Make it visible
    const height = accordion.scrollHeight + 'px'; // Get it's height
    accordion.style.display = ''; //  Hide it again
    return height;
  };

const addRole = (item, roleValue) => item.setAttribute('role', roleValue)

const containsClass = (item, value) => item.classList.contains(value)

const wait = (time, callback) => setTimeout(callback, time)

const open = accordion => {
  const height = getHeight(accordion);
  accordion.classList.add('active')

  accordion.style.height = height;

  wait(350, function () {
    accordion.setAttribute('aria-hidden', 'false')
    accordion.style.height = '';
  })
}

const close = accordion => {
  accordion.style.height = accordion.scrollHeight + 'px';

  wait(1, () => {
    accordion.style.height = '0';
  })

  wait(350, () => {
    accordion.classList.remove('active')
    accordion.setAttribute('aria-hidden', 'true')
  })
}

const active = (toggler, accordion) => {
  toggler.classList.add('active')
  toggler.setAttribute('aria-expanded', 'true')
  open(accordion)
}

const inActive = (toggler, accordion) => {
  toggler.classList.remove('active')
  toggler.setAttribute('aria-expanded', 'false')
  close(accordion)
}

export const init = accordions => {
  Array.from(accordions).forEach(function(item) {
    addRole(item, 'tablist')

    const toggler = item.querySelector('.toggler')
    const accordion = item.querySelector('.accordion')

    addRole(accordion, 'tabpanel')
    addRole(toggler, 'tab')
    toggler.setAttribute('tabindex', 0)

    toggler.setAttribute('aria-expanded', 'false');

    accordion.setAttribute('aria-hidden', 'true')

    toggler.addEventListener('click', function (event) {

    (!containsClass(this, 'active'))
      ? active(this, accordion)
      : inActive(this, accordion)
    })
  })
}
