function setup() {
    if (localStorage['updated-text']) {
        document.getElementById('updated-text').innerHTML = localStorage['updated-text'];
    }
    
    // const date = Date() something;
    // if (date.getDay() > 16 && localStorage['month'] === date.getMonth()) {
    //     sendmessage
    // }


    const homeButton = document.querySelector('#home-btn');

    homeButton.addEventListener('click', () => {
        window.open('https://www.compasscard.ca/');

    });


    const checkButton = document.querySelector('#check-btn');

    checkButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ data: "notif", hello: 'yes' }, function (response) {
            console.log("Response received in popup.js");
        });

    });


    const upassButton = document.querySelector('#upass-btn');

    upassButton.addEventListener('click', () => {
        window.open('https://upassbc.translink.ca/');
        updateText();
    });
}

function updateText() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateFormat = date.toLocaleString('en-US', options);
    const str = 'Last updated: ' + dateFormat;
    document.getElementById('updated-text').innerHTML = str;
    localStorage['updated-text'] = str;
    localStorage['month'] = date.getMonth();
}

document.addEventListener('DOMContentLoaded', function () {
    setup();
});