// see app.css
const SIDEBAR_WIDTH = 200;

const leftSide = document.getElementsByTagName('nav')[0]
const rightSide = document.getElementsByTagName('aside')[0]

function getElWidth(el) {
  return el.getBoundingClientRect().width
}

function setElWidth(el, width) {
  el.style.width = `${width}px`
}

function isHidden(el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'none')
}

function toggleEl(el) {
  if (isHidden(el)) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
}

const toggleLeftSidebar = () => {
  const width = getElWidth(leftSide) === 0 ? SIDEBAR_WIDTH : 0;
  setElWidth(leftSide, width)
}

const toggleRightSidebar = () => {
  const width = getElWidth(rightSide) === 0 ? SIDEBAR_WIDTH : 0;
  setElWidth(rightSide, width)
}


const toggleSequence = () => {
  toggleLeftSidebar()
  toggleRightSidebar()

  setTimeout(() => {
    toggleRightSidebar()
  }, 1000)

  setTimeout(() => {
    toggleLeftSidebar()
  }, 2000)

  setTimeout(() => {
    toggleRightSidebar()
  }, 3000)

  setTimeout(() => {
    toggleLeftSidebar()
  }, 4000)

  setTimeout(() => {
    toggleRightSidebar()
  }, 5000)

  setTimeout(() => {
    toggleRightSidebar()
  }, 6000)
}

// invoke this to view collapsing drawers in realtime
// toggleSequence()