const bar1 = document.getElementById('bar1');
const nav = document.getElementById('bar');
const close = document.getElementById('close');

if(bar1)
{
    bar1.addEventListener('click', () => {
        nav.classList.add('active')
})
}

if(close)
{
    close.addEventListener('click', () => {
        nav.classList.remove('active')
})
}