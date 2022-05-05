;(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const name = searchParams.get('fname')
    console.log(name)
    const domName = document.querySelector('[data-name]')
    console.log(domName)
  
    if(domName) {
      domName.textContent = 'Thank you for the feedback, ' + name + '!'
    }
  })()