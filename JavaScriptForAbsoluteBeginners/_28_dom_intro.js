(function () {
    function clickHandler(message) {
        console.log('hi ... ' + message);
    }

    let button = document.getElementById('myButton');
    button.addEventListener('click', function() { clickHandler('from iife')});
})();