function removePreviousIcon(id) {
  const nav = document.getElementsByClassName('peach-title');
  if (nav.length) {
    const parent = nav[0];
    parent.classList.remove('peach-title');
    const iconDiv = parent.getElementsByClassName('icon-feature');
    if (iconDiv.length) {
      parent.removeChild(iconDiv[0]);
    }
 }
}

function changeNav(id) {
  const element = document.getElementById(id);
  const elementClass = element.classList;
  if (elementClass.contains('peach-title') === false) {
      removePreviousIcon(id);
      elementClass.add('peach-title');
      if (element.parentElement.classList.contains('bottom') === false)
      {
        const iconDiv = document.createElement('div');
        iconDiv.className = "icon-feature";
        switch (id) {
          case 'nav-features':
            iconDiv.innerHTML = "🍀";
            break;
          case 'nav-pricing':
            iconDiv.innerHTML = "🤑";
            break;
          case 'nav-customers':
            iconDiv.innerHTML = "🙌";
            break;
          case 'nav-support':
            iconDiv.innerHTML = "🙏";
            break;
          case 'nav-about':
            iconDiv.innerHTML = "🎃";
            break;
          default:
            iconDiv.innerHTML = "";
            break;
        }
      element.appendChild(iconDiv);
    }
  }
}
