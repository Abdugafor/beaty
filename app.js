const btn = document.querySelector('.btn'),
      error = document.querySelector('.error'),
      succsess = document.querySelector('.succsess')


btn.addEventListener('click', () => {
    const valid = '@'
    if (!email.value.match(valid))  {
        error.style.display = 'block'
        succsess.style.display = 'none'
    }else {
        error.style.display = 'none'
        succsess.style.display = 'block'
    }
})