
// // send notification on startup
// chrome.runtime.onStartup.addListener(() => { reminder() });

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

// notification request
chrome.runtime.onMessage.addListener((message) => {
    console.log('Received message: ' + message.msg);
    if (message.msg === 'notif') {
        sendNotif();
    }
});