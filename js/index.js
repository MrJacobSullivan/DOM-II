// mouseover
const bus = document.querySelector('header img')
bus.addEventListener('mouseover', (e) => {
  e.target.style.transition = '100ms'
  e.target.style.transform = 'translate(50px)'
})

// keydown
const h1 = document.querySelector('h1')
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') h1.style.color = 'red'
})
