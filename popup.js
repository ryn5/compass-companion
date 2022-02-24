if (localStorage['updated-text']) {
    document.getElementById('updated-text').innerHTML = localStorage['updated-text'];
}

const homeButton = document.querySelector('#home-btn');
homeButton.addEventListener('click', () => {
    // window.open('https://www.compasscard.ca/');

    chrome.runtime.sendMessage({ msg: "notif", hello: 'yes' }, function (response) {
        console.log('Response received in popup.js!!!!');
    });

});

const checkButton = document.querySelector('#check-btn');
checkButton.addEventListener('click', async () => {
    document.getElementById('balance-text').innerHTML = ('Fetching balance...');
    const response = await fetch('http://localhost:3000/balance');
    response.text().then((res) => {
        document.getElementById('balance-text').innerHTML = ('Balance: ' + res);
    });

});

const upassButton = document.querySelector('#upass-btn');
upassButton.addEventListener('click', () => {
    fetch('http://localhost:3000/upass');
    updateText();
});

function updateText() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateFormat = date.toLocaleString('en-US', options);
    const str = 'U-Pass last loaded: ' + dateFormat;
    document.getElementById('updated-text').innerHTML = str;
    localStorage['updated-text'] = str;
    localStorage['month'] = date.getMonth() + 1; // updates month for reminder
}

function reminder() {
    const date = new Date();
    // if (date.getDay() > 5 && localStorage['month'] === date.getMonth()) { // try with today's date and reopen chrome
        chrome.runtime.sendMessage({msg: 'notif'}, function (response) { // try sending msg as plain string
            console.log(response);
        });
    // }
}