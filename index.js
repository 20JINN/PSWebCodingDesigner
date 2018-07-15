
var index = [
  "Day1",
  "Day2",
  "Day3",
  "Day4",
  "Day5",
  "Day6",
  "Day7",
  "Day8"
];

var indexList = document.getElementsByClassName("index-container");
for (i=0; i < index.length; i++) {
  indexList.innerHTML = "<div>" + index[i] + "</div>";
  console.log(index[i]);
  if (i > index.length) {
    i=0;
  }
}
    


/* 스크립트로 링크 만들고싶다 
var indexList = document.getElementsByClassName("index_inner");
for (var i = 0; i <index.length; i++) {
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var a = document.createElement("a");
  
  a.href = index[i].link;
  
  li.id = index[i].id;
  li.appendChild(a);
  ul.appendChild(li);
  indexList.appendChild(ul);
};
*/