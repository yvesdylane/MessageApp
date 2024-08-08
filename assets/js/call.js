function toggleActive(activeClass, otherClass, id1, id2) {
    const activeElement = document.querySelector(`.${activeClass}[active="true"]`);
    const otherElement = document.querySelector(`.${otherClass}`);

    activeElement.classList.remove('active');
    activeElement.setAttribute('active', 'false');

    otherElement.classList.add('active');
    otherElement.setAttribute('active', 'true');

    const element1 = document.getElementById(id1);
    const element2 = document.getElementById(id2);

    element1.className = 'my-button active';

    element2.className = 'my-button'
  }