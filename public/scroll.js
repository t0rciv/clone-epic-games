function onScroll() {
  const nav = document.querySelector('#navigation')
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

onScroll()
