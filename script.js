const burger = document.querySelector('.burger')

burger.addEventListener('click', ()=>{
  const ul = document.querySelector('.u')
  if (ul.classList.contains('toshow')){
    ul.classList.remove('toshow')
  } else {
    ul.classList.add('toshow')
  }
})