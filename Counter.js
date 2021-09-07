// set initial count
let count = 0;
// select value and Button 
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('Increase')) {
            count++;
        } else {
            count = 0
        }
        if (count > 0) {
            value.style.color = "green"
        } if (count < 0) {
            value.style.color = "#346751"
        } if (count === 0) {
            value.style.color = "black"
        }

        value.textContent = count
    })
})














