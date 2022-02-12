/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
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

chrome.runtime.onStartup.addListener(function() {
    reminder();
});

function reminder() {
    const date = new Date();
    // if (date.getDay() > 5 && localStorage['month'] === date.getMonth()) { // try with today's date and reopen chrome
        chrome.runtime.sendMessage({msg: 'notif'}, function (response) { // try sending msg as plain string
            console.log(response);
        });
    // }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSxlQUFlLDZDQUE2Qzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0Usb0NBQW9DLGFBQWEsd0JBQXdCO0FBQ3pFO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIG1lc3NhZ2U6ICcgKyBtZXNzYWdlLm1zZyk7XG4gICAgY2FsbGJhY2soeyBncmVldGluZzogXCJDYWxsaW5nIGJhY2sgZnJvbSBiYWNrZ3JvdW5kLmpzXCIgfSk7XG5cbiAgICBpZiAobWVzc2FnZS5tc2cgPT09ICdub3RpZicpIHtcbiAgICAgICAgY29uc3Qgb3B0ID0ge1xuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIHRpdGxlOiAnVVBhc3MgUmVtaW5kZXInLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0l0XFwncyB0aW1lIHRvIHJlbmV3IHlvdXIgVVBhc3MhJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAxLFxuICAgICAgICAgICAgaWNvblVybDogJ2ltYWdlcy9sb2dvLnBuZydcblxuICAgICAgICB9O1xuICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoJ3JlbWluZGVyLW5vdGlmJywgb3B0LCBmdW5jdGlvbiAoaWQpIHt9KTtcbiAgICB9XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25TdGFydHVwLmFkZExpc3RlbmVyKGZ1bmN0aW9uKCkge1xuICAgIHJlbWluZGVyKCk7XG59KTtcblxuZnVuY3Rpb24gcmVtaW5kZXIoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgLy8gaWYgKGRhdGUuZ2V0RGF5KCkgPiA1ICYmIGxvY2FsU3RvcmFnZVsnbW9udGgnXSA9PT0gZGF0ZS5nZXRNb250aCgpKSB7IC8vIHRyeSB3aXRoIHRvZGF5J3MgZGF0ZSBhbmQgcmVvcGVuIGNocm9tZVxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7bXNnOiAnbm90aWYnfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7IC8vIHRyeSBzZW5kaW5nIG1zZyBhcyBwbGFpbiBzdHJpbmdcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgLy8gfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==