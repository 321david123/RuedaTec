window.addEventListener("scroll", function(){
    let nav = document.getElementById("toid");
    // let li = document.getElementById("it");
    nav.classList.toggle("asd", window.scrollY < 1)
    // li.classList.toggle("letras", window.scrollY > 40)
  })