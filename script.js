document.querySelector("#form").addEventListener('submit', (ev) => {
    ev.preventDefault();
    const color = document.querySelector('.form__color').value;
    const cols = document.querySelector('.form__cols').value;

    const allCols = document.querySelectorAll('.table__cols');

    for (let i = 0; i < allCols.length; i++) {
        allCols[i].style.backgroundColor = color;
    }
    document.querySelector(`.${cols}`).style.backgroundColor = 'white';
})