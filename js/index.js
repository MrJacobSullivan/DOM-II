// mouseover
const bus = document.querySelector('header img')
bus.addEventListener('mouseover', (e) => {
  e.target.style.transition = '100ms'
  e.target.style.transform = 'translate(50px)'
})
