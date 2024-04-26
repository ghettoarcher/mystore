document.addEventListener("DOMContentLoaded", function(){
      document.getElementById("burger").addEventListener("click", function(){
            console.log('click');
            document.querySelector("header-nav").classList.toggle("open")
      })
})