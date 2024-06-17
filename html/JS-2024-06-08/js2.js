const greeting =function () {
    alert("Hello, World!");
};


console.log(document.querySelector("#myButton"));
console.log(document.getElementById("myButton"));


console.log(document.querySelector(".myButton"));
console.log(document.getElementsByClassName("myButton"));


console.log(document.querySelector("button[name='myButton']"));
console.log(document.getElementsByName("myButton"));






document.querySelector("#myButton").addEventListener("click", function () { 
    document.querySelector("#header").innerHTML = "Hello, World!";
    document.querySelector("#header").style.color = "red";
});
document.querySelector(".myButton").addEventListener("click", function () { 
    document.querySelector("#header").innerHTML = "Hello!";
    document.querySelector("#header").style.color = "green";
});
document.querySelector("button[name='myButton']").addEventListener("click", function () { 
    document.querySelector("#header").innerHTML = "Hijli College!";
    document.querySelector("#header").style.color = "blue";
});

window.addEventListener("resize", function () { 
    document.querySelector("#header").innerHTML = "Hijli College!";
    document.querySelector("#header").style.color = "blue";
});