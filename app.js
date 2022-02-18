const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const miniNavbar = document.querySelector('.mini-navbar')
const getAppBtn = document.getElementById('working')

openBtn.addEventListener('click', function() {
    miniNavbar.classList.remove('hidden')
})


closeBtn.addEventListener('click', function() {
    miniNavbar.classList.add('hidden')
})

// working
getAppBtn.addEventListener('click', function () {
    alert('Tuzatish ishlari olib borilmoqda')
})