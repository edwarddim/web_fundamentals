console.log("Hello this is JS!")

// alert("Welcome To My Page!!")
// confirm("Are you sure you want to resbumit this page?")

var bod = document.body

var container = document.getElementById("container")
// container.innerHTML = "<p> Words inside the container </p>"

var title = document.getElementById("title")
title.addEventListener("mouseenter", function(){
    console.log("MOUSE HAS ENTERED THE H1")
})

title.addEventListener("mouseleave", function(){
    console.log("MOUSE HAS LEFT THE H1")
})

var button = document.getElementById("dark_mode")
button.addEventListener("click", function(){
    container.style.backgroundColor="black"
})

var button = document.getElementById("light_mode")
button.addEventListener("click", function(){
    container.style.backgroundColor="steelblue"
})