// functions


// heart counting

const hearts = document.getElementsByClassName('heart');

for (let heart of hearts) {
    heart.addEventListener('click', function () {
        let heartNum = document.getElementById("heart-number")
        heartNum.innerText++;
    })
}

// call btn functionalities



