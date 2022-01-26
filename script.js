let urls = [];
urls['url_car'] = 'https://images.pexels.com/photos/10050311/pexels-photo-10050311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
urls['url_road'] = 'https://images.pexels.com/photos/9744703/pexels-photo-9744703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
urls['url_alley'] = 'https://images.pexels.com/photos/9657830/pexels-photo-9657830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
urls['url_falls'] = 'https://images.pexels.com/photos/10399167/pexels-photo-10399167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const body = document.querySelector('body')
const img = document.querySelector('img')

const btnAll = document.querySelectorAll('.btn');

const changePage = (event) => {
    let btn = event.currentTarget;

    if (btn.dataset.type == 'color') {
        body.classList.remove('primary')
        body.classList.remove('danger')
        body.classList.remove('warning')
        body.classList.remove('success')

        body.classList.add(btn.dataset.changeClass)
        // body.style.backgroundColor = btn.dataset.changeColor;
    } else if (btn.dataset.type = 'url') {
        img.src = urls[btn.dataset.url]
    } else {
        console.log('nothing done, unexpected type');
    }
}


btnAll.forEach(el => {
    el.addEventListener('click', changePage)
});