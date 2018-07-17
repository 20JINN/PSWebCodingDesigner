var ids = [
    "contributor1",
    "contributor2",
    "contributor3",
    "contributor4",
    "contributor5",
    "contributor6",
    "contributor7",
    "contributor8"
]
var generateRandom = function(){
  var a =  Math.random();
  return a * 100;
}

for (i = 0; i < ids.length; i++){
    var contributorStyle = document.getElementById(ids[i]).style;
    function randomStyle(){
        var ranLeft = generateRandom() % 90;
        var ranTop = generateRandom();
        var ranSize = generateRandom() % 30;
        if ( ranSize < 12 ) {
            ranSize += 12
        };
        contributorStyle.top = ranTop + "vh";
        contributorStyle.position = "absolute";
        contributorStyle.left = ranLeft + "vw";
        contributorStyle.fontSize = ranSize + "px";
    };
    randomStyle();
}

// var contributor = document.getElementsByClassName("contributors");
// var contributorSelection = [];
// for( i = 0; i < contributor.length; i++) {
//   var c = contributor[i];
//   contributorSelection.push(c)
// }
// console.log(contributorSelection);

/*var 커피종류 = [
    "아메리카노",
    "라떼",
    "모카",
    "마끼아또",
    "에스프레소",
    "바닐라라떼",
    "아포가토",
    "샤케라또"
]

var 컨테이너 = document.getElementById("컨테이너");
var 들어갈요소 = "";

for (var 순서 = 0; 순서 < 커피종류.length; 순서++){
    들어갈요소 = 들어갈요소 + ("<div>" + 커피종류[순서] + "</div>")
}*/

// for (var 순서 = 0; 순서 < 커피종류.length; 순서++){
//     들어갈요소 = 들어갈요소 + ("<div class='coffee'>" + 커피종류[순서] + "</div>")
// }

// 컨테이너.innerHTML = 들어갈요소 + ("커피종류 개수:" + 커피종류.length + "개");

console.log("hello world");
console.log("First Start");
var 오오 = ["올","좋당"]
