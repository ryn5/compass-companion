chrome.runtime.onMessage.addListener((message, sender, callback) => {
    console.log('Received message: ' + message.msg);
    callback({ greeting: "Calling back from background.js" });

    if (message.msg === 'notif') {
        const opt = {
            type: 'basic',
            title: 'UPass Reminder',
            message: 'It\'s time to renew your UPass!',
            priority: 1,
            iconUrl: 'images/logo.png'

        };
        chrome.notifications.create('reminder-notif', opt, function (id) {});
    }
});