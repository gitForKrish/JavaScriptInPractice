if(false) {} else {console.log('false is falsy')}
if(null) {} else {console.log('null  is falsy')}
if(undefined) {} else {console.log('undefined  is falsy')}
if('') {} else {console.log('double empty single quote is falsy')}
if("") {} else {console.log('double empty double quote is falsy')}
if(0) {} else {console.log('0 is falsy')}
if(NaN) {} else {console.log('NaN is falsy')}

// everything else are truthy
if(true) {console.log('true is truthy.')} else {}
if({}) {console.log('empty object is truthy.')} else {}
if([]) {console.log('empty array is truthy.')} else {}

if('any') {console.log('non-empty string is truthy.')} else {}
if(new RegExp()) {console.log('RegExp object is truthy.')} else {}
if(new Date()) {console.log('Date object is truthy.')} else {}

if(10) {console.log('any nonzero value is truthy.')} else {}
if(-10) {console.log('any nonzero value is truthy.')} else {}
if(1.23) {console.log('any nonzero value is truthy.')} else {}
if(-1.23) {console.log('any nonzero value is truthy.')} else {}
if(Infinity) {console.log('any nonzero value is truthy.')} else {}
if(-Infinity) {console.log('any nonzero value is truthy.')} else {}

