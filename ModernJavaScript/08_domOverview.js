let val;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;

val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].innerText;

console.log(val);

// HTML Collection to List
let tags = document.all;
let tagsArr = Array.from(tags);
tagsArr.forEach(function(tag){
  console.log(tag.tagName);
});