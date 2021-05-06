document.getElementById('btn').addEventListener('click', check)
const text = document.getElementById('txt')
const input = document.getElementById('inp')

function check () {
  const age = parseInt(input.value)
  input.value = null
  if (age * 0 === 0) {
    if (age >= 18) {
      text.innerHTML = 'You are old enough to watch R rated movies alone.'
    } else if (age >= 13) {
      text.innerHTML = 'You are old enough to watch PG-13 rated movies alone.'
    } else {
      text.innerHTML = 'You are only allowed to watch G rated movies.'
    }
  } else {
    text.innerHTML = 'Please enter a valid number.'
  }
}