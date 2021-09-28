// click
document.querySelectorAll('nav a').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault()
    const destination = a.textContent.toLowerCase().replace(' ', '-')
    console.log(`routing to /${destination}`)
  })
})

// load
const queryData = () => console.log('querying data...')
window.onload = () => queryData()

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

// focus
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('focus', () => {
    link.style.color = 'green'
  })
})

// resize
window.onresize = () => console.log(window.innerWidth)

// scroll
window.onscroll = () => console.log('scrolling!')

// select
const content = document.querySelector('.content-section')
const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Hello world')

input.addEventListener('select', (e) => {
  const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
  console.log(selection)
})

content.append(input)

// dblclick
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('dblclick', () => {
    img.style.display = 'none'
  })
})

// drag and drop
const container = document.querySelector('.content-pick')

const cards = document.querySelectorAll('.destination')
cards.forEach((card, i) => {
  card.style.padding = '1%'
  card.style.border = '1px solid black'
  card.setAttribute('draggable', true)
  card.classList.add('draggable')
  card.style.cursor = 'move'

  if (i === 0) card.style.background = 'red'
  if (i === 1) card.style.background = 'green'
  if (i === 2) card.style.background = 'blue'

  card.addEventListener('dragstart', () => {
    card.style.opacity = '0.5'
    card.classList.add('dragging')
  })

  card.addEventListener('dragend', () => {
    card.style.opacity = '1.0'
    card.classList.remove('dragging')
  })
})

const getDragAfterElement = (container, x) => {
  const draggableElements = Array.from(container.querySelectorAll('.draggable:not(.dragging)'))

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = x - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      }
      return closest
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element
}

container.addEventListener('dragover', (e) => {
  e.preventDefault()
  const afterElement = getDragAfterElement(container, e.clientX)
  const dragging = document.querySelector('.dragging')
  if (afterElement == null) {
    container.appendChild(dragging)
  } else {
    container.insertBefore(dragging, afterElement)
  }
})
