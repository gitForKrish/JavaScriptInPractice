let name = 'krish';
console.log(`Hello ${name}`);

// multiline string with preserving the format
let sentence = `Template literals are quite simply the easiest way 
        to improve your JavaScript code readability when working with Strings. 
    Ok, that's great and all, but what exactly is a Template Literal?
A literal is a value written exactly as it's meant to be interpreted .`;
console.log(sentence);

function getReasons(){
    return 1;
}
let interpolation = `Give me ${getReasons()===1?'one good reason':'few reasons'} to try this`;
console.log(interpolation);