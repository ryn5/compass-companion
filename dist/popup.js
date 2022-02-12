/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./popup.js ***!
  \******************/
if (localStorage['updated-text']) {
    document.getElementById('updated-text').innerHTML = localStorage['updated-text'];
}

const homeButton = document.querySelector('#home-btn');
homeButton.addEventListener('click', () => {
    window.open('https://www.compasscard.ca/');

});

const checkButton = document.querySelector('#check-btn');
checkButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ msg: "notif", hello: 'yes' }, function (response) {
        console.log('Response received in popup.js!!!!');
    });

});

const upassButton = document.querySelector('#upass-btn');
upassButton.addEventListener('click', () => {
    window.open('https://upassbc.translink.ca/');
    updateText();
});

function updateText() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateFormat = date.toLocaleString('en-US', options);
    const str = 'Last updated: ' + dateFormat;
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGlDQUFpQyw0QkFBNEI7QUFDN0Q7QUFDQSxLQUFLOztBQUVMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RSxvQ0FBb0MsYUFBYSx3QkFBd0I7QUFDekU7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKGxvY2FsU3RvcmFnZVsndXBkYXRlZC10ZXh0J10pIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlZC10ZXh0JykuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlWyd1cGRhdGVkLXRleHQnXTtcbn1cblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ0bicpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuY29tcGFzc2NhcmQuY2EvJyk7XG5cbn0pO1xuXG5jb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVjay1idG4nKTtcbmNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbXNnOiBcIm5vdGlmXCIsIGhlbGxvOiAneWVzJyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkIGluIHBvcHVwLmpzISEhIScpO1xuICAgIH0pO1xuXG59KTtcblxuY29uc3QgdXBhc3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBhc3MtYnRuJyk7XG51cGFzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly91cGFzc2JjLnRyYW5zbGluay5jYS8nKTtcbiAgICB1cGRhdGVUZXh0KCk7XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlVGV4dCgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBvcHRpb25zID0geyBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9O1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0ciA9ICdMYXN0IHVwZGF0ZWQ6ICcgKyBkYXRlRm9ybWF0O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVkLXRleHQnKS5pbm5lckhUTUwgPSBzdHI7XG4gICAgbG9jYWxTdG9yYWdlWyd1cGRhdGVkLXRleHQnXSA9IHN0cjtcbiAgICBsb2NhbFN0b3JhZ2VbJ21vbnRoJ10gPSBkYXRlLmdldE1vbnRoKCkgKyAxOyAvLyB1cGRhdGVzIG1vbnRoIGZvciByZW1pbmRlclxufVxuXG5mdW5jdGlvbiByZW1pbmRlcigpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAvLyBpZiAoZGF0ZS5nZXREYXkoKSA+IDUgJiYgbG9jYWxTdG9yYWdlWydtb250aCddID09PSBkYXRlLmdldE1vbnRoKCkpIHsgLy8gdHJ5IHdpdGggdG9kYXkncyBkYXRlIGFuZCByZW9wZW4gY2hyb21lXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHttc2c6ICdub3RpZid9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHsgLy8gdHJ5IHNlbmRpbmcgbXNnIGFzIHBsYWluIHN0cmluZ1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAvLyB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9