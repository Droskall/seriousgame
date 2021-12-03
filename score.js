score = localStorage.getItem("score")
total = localStorage.getItem("total")
console.log(score)
document.getElementById("score").innerHTML = score + " / " + total;