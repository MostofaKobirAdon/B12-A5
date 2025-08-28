
let callHistory = []


// heart counting

const hearts = document.getElementsByClassName('heart');

for (let heart of hearts) {
    heart.addEventListener('click', function () {
        let heartNum = document.getElementById("heart-number")
        heartNum.innerText++;
    })
}

// call btn functionalities

function callBtnEvent(element) {
    element.addEventListener('click', function () {
        const historyContainer = document.getElementById("history-container")
        let coinNumber = parseInt(document.getElementById('coin-num').innerText)


        if (coinNumber < 20) {
            alert('❌আপনার  পর্যাপ্ত কয়েন 🪙 নেই। কল করার জন্য কমপক্ষে ২০টি কয়েন প্রয়োজন।')
            return;
        }

        const btnParent = element.parentNode;
        const card = btnParent.parentNode;
        const subTitle = card.children[2];
        const number = card.children[3];

        const newCoinNum = coinNumber - 20;
        document.getElementById('coin-num').innerText = newCoinNum
        const alertText = '📞 calling'
        alert(alertText + ' ' + subTitle.innerText + ' ' + number.innerText + '...')

        let data = {
            serviceName: card.children[1].innerText,
            serviceNumber: card.children[3].innerText,
            date: new Date().toLocaleTimeString()
        };


        callHistory.push(data)
        historyContainer.innerHTML = ``
        for (let history of callHistory) {
            const historyCard = document.createElement('div');
            historyCard.innerHTML = `
                <div class=" flex justify-between items-center p-3 rounded-lg bg-gray-100 mt-2">
                    <div class="">
                        <h2 class="text-[19px] font-medium">${history.serviceName}</h2>
                        <p class="text-[18px] text-gray-500">${history.serviceNumber}</p>
                    </div>
                <p class="text-[18px]">${history.date}</p>
                </div>`
            historyContainer.appendChild(historyCard)

        }



    })
}



callBtnEvent(document.getElementById("emergency-call-btn"))
callBtnEvent(document.getElementById("police-call-btn"))
callBtnEvent(document.getElementById("fire-call-btn"))
callBtnEvent(document.getElementById("ambulance-call-btn"))
callBtnEvent(document.getElementById("Womenhelp-call-btn"))
callBtnEvent(document.getElementById("anti-call-btn"))
callBtnEvent(document.getElementById("power-call-btn"))
callBtnEvent(document.getElementById("brac-call-btn"))
callBtnEvent(document.getElementById("rail-call-btn"))

document.getElementById('clear-btn').addEventListener("click", function () {
    const historyContainer = document.getElementById("history-container")
    historyContainer.innerHTML = ``;
})
