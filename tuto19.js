let str = "phython";
let links = document.links;
//console.log(links);
let href;

Array.from(links).forEach(function (ele) {
    href = ele.href;
    if (href.includes(str)) {

        console.log(href);
    }

});