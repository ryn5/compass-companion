chrome.runtime.onMessage.addListener((message, sender, callback) => {
    console.log('Received message: ' + message.data);
    callback({ greeting: "Calling back from background.js" });

    if (message.data === 'notif') {
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