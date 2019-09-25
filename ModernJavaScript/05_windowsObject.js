// WINDOW METHODS-OBJECTS-PROPERTIES
// window.console.log(123); // Console is a part of Window object

// // alert
// alert('Hello'); // or window.alert

// // prompt
// let msg = prompt();
// alert(msg);

// // confirm
// let decision = confirm('Are you sure?');
// if (decision) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// Window outer height and width
console.log(`Outer Height: ${window.outerHeight}`);
console.log(`Outer Width: ${window.outerWidth}`);

// Window inner height and width
console.log(`Inner Height: ${window.innerHeight}`);
console.log(`Inner Width: ${window.innerWidth}`);

// Scroll Point
console.log(`Scroll Position: X=${window.scrollX} Y=${window.scrollY}`);

console.log(window.location);
console.log('Host:' + window.location.host);
console.log('Hostname:' + window.location.hostname);
console.log('Port:' + window.location.port);
console.log('Href:' + window.location.href);
console.log('Protocol:' + window.location.protocol);
console.log('Pathname:' + window.location.pathname);

// window.location.href = window.location.href + '?name="krish"&Id=50';
console.log('Search:' + window.location.search);

// Redirect
// window.location.href = 'http://google.com';

// Reload
//window.location.reload();

// History
// window.history.go(-1); // -1 indicate Previous page, 0
// window.history.go(0); // 0 indicate current page
console.log('History length: '+ window.history.length);

// Navigator - Browser related information
console.log(window.navigator);
console.log(window.navigator.vendor);
console.log(window.navigator.appCodeName);
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.userAgent);
console.log(window.navigator.language);