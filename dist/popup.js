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

    // // notification test
    // chrome.runtime.sendMessage({ msg: "notif" }, function (response) {
    //     console.log('Response received in popup.js!');
    // });

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
    if (date.getDate() >= 16) localStorage['month'] = date.getMonth(); // updates month for reminder check
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQSxRQUFROztBQUVSLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAobG9jYWxTdG9yYWdlWyd1cGRhdGVkLXRleHQnXSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVkLXRleHQnKS5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2VbJ3VwZGF0ZWQtdGV4dCddO1xufVxuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5jb21wYXNzY2FyZC5jYS8nKTtcblxuICAgIC8vIC8vIG5vdGlmaWNhdGlvbiB0ZXN0XG4gICAgLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBtc2c6IFwibm90aWZcIiB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkIGluIHBvcHVwLmpzIScpO1xuICAgIC8vIH0pO1xuXG59KTtcblxuY29uc3QgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2stYnRuJyk7XG5jaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsYW5jZS10ZXh0JykuaW5uZXJIVE1MID0gKCdGZXRjaGluZyBiYWxhbmNlLi4uJyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2JhbGFuY2UnKTtcbiAgICByZXNwb25zZS50ZXh0KCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxhbmNlLXRleHQnKS5pbm5lckhUTUwgPSAoJ0JhbGFuY2U6ICcgKyByZXMpO1xuICAgIH0pO1xuXG59KTtcblxuY29uc3QgdXBhc3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBhc3MtYnRuJyk7XG51cGFzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwYXNzJyk7XG4gICAgdXBkYXRlVGV4dCgpO1xufSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRleHQoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfTtcbiAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdHIgPSAnVS1QYXNzIGxhc3QgbG9hZGVkOiAnICsgZGF0ZUZvcm1hdDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlZC10ZXh0JykuaW5uZXJIVE1MID0gc3RyO1xuICAgIGxvY2FsU3RvcmFnZVsndXBkYXRlZC10ZXh0J10gPSBzdHI7XG4gICAgaWYgKGRhdGUuZ2V0RGF0ZSgpID49IDE2KSBsb2NhbFN0b3JhZ2VbJ21vbnRoJ10gPSBkYXRlLmdldE1vbnRoKCk7IC8vIHVwZGF0ZXMgbW9udGggZm9yIHJlbWluZGVyIGNoZWNrXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9