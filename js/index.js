var select = document.querySelector('#options-type-select')

var glide = new Glide('#options-type', {
  type: select.value,
  perView:1
})

select.addEventListener('change', function (event) {
  glide.update({
    type: event.target.value
  })
})

glide.mount()