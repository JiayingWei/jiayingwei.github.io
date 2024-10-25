console.log('tested')
// table of contents
var TOC = document.getElementById('TOC');
var portfolio_body = document.getElementById('portfolio');

// grab all of the headings in order
var headings = portfolio_body.querySelectorAll("h2");

for (let i = 0; i < headings.length; i++) {
    headings[i].id = headings[i].innerHTML;
    var li = document.createElement("li");
    li.innerHTML= `<a href='#${headings[i].innerHTML}' class = "leading-loose	text-gray-600 hover:text-electric_purple">${headings[i].innerHTML}</a>`
    TOC.appendChild(li);
};