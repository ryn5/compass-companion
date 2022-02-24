
chrome.runtime.onStartup.addListener(() => { reminder() });

function sendNotif() {
    const opt = {
        type: 'basic',
        title: 'UPass Reminder',
        message: 'It\'s time to renew your U-Pass!',
        priority: 1,
        iconUrl: 'images/logo.png'
    };
    chrome.notifications.create('reminder-notif', opt, function (id) {});
}

function reminder() {
    // const date = new Date();
    // console.log(date.getDate() + ' ' + date.getMonth() + localStorage['updated-text']);
    // if (date.getDate() > 23 && (!localStorage['month'] || localStorage['month'] != date.getMonth())) {
        sendNotif();
    // }
}

// notification test
chrome.runtime.onMessage.addListener((message, callback) => {
    console.log('Received message: ' + message.msg);
    callback({ greeting: "Calling back from background.js" });
    if (message.msg === 'notif') {
        sendNotif();
    }
});