function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
  }


  const c = document.getElementById("houseone");
  const ctx = c.getContext("2d");
  ctx.font= "12pt Times New Roman";
  ctx.strokeRect(0, 0, 90, 70);
  ctx.fillText("Laundry", 18, 40);
  ctx.strokeRect(90, 0, 80, 70);
  ctx.fillText("Bath", 112, 40);
  ctx.strokeRect(170, 0, 60, 30);
  ctx.strokeRect(180, 8, 40, 15);
  ctx.strokeRect(230, 0, 30, 30);
  ctx.strokeRect(260, 0, 40, 30);
  ctx.strokeRect(170, 0, 180, 70);
  ctx.fillText("Kitchen", 210, 55);
  ctx.strokeRect(0, 150, 30, -50);
  ctx.strokeRect(30, 150, 140, -50);
  ctx.fillText("Master Bedroom", 45, 130);
  ctx.fillText("Living Room", 190, 130);
  












  

  

