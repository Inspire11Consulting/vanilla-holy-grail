const leftSide = document.getElementsByTagName('nav')[0]
const rightSide = document.getElementsByTagName('aside')[0]

// var assignment via app.css
// see (.hidden) property
const COLLAPSED_NAME = 'hidden'

const toggleLeftPanel = () => {
  if (leftSide.classList.contains(COLLAPSED_NAME)) {
    leftSide.classList.remove(COLLAPSED_NAME)
  } else {
    leftSide.classList.add(COLLAPSED_NAME)
  }
}
const toggleRightPanel = () => {
  if (rightSide.classList.contains(COLLAPSED_NAME)) {
    rightSide.classList.remove(COLLAPSED_NAME)
  } else {
    rightSide.classList.add(COLLAPSED_NAME)
  }
}

const toggleSequence = () => {
  toggleLeftPanel()
  toggleRightPanel()

  setTimeout(() => {
    toggleLeftPanel()
  }, 3000)

  setTimeout(() => {
    toggleRightPanel()
  }, 6000)
}
    // toggleSequence()