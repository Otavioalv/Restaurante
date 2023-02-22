
window.onload = function(){
    var botMen = document.getElementById("iOpc--bottom");
    var opcs = document.getElementById("list-special");

    botMen.addEventListener("click", function(event){
        
      console.log(event.target);  
      var menu = document.getElementById("iOpc"); 
    
      /*   menu.style.display = menu.style.display == "block" ? "none" : "block"; */
      if(menu.style.display == "block"){
        menu.style.animationName = "menSumir";
        menu.style.animationDuration = "0.5s";
        
        const linhas = document.querySelectorAll('.opc__ul li');
        
        if(linhas.classList != null) remoneline(linhas);

        for (let i = linhas.length - 1; i >= 0; i--) {
          setTimeout(() => {
            linhas[i].classList.add('aniSum');
          }, 30 * (linhas.length - i));
        }
        
        opcs.style.display = "none";
        opcs.style.position = "absolute";
    
        setTimeout(function(){
            menu.style.display = "none";
            menu.style.height = "0";
        }, 300);
    
      }
      else{
        const linhas = document.querySelectorAll('.opc__ul li');
        
        if(linhas[0].classList != '') remoneline(linhas);
        console.log(linhas[0].classList);

        let index = 0;
        const intervalo = setInterval(() => {
          if (index >= linhas.length) {
            clearInterval(intervalo);
            return;
          }
          linhas[index].classList.add('aniApa');
          index++;
        }, 30);
    
        menu.style.display = "block";
        menu.style.animationName = "menApa";
        menu.style.animationDuration = "0.4s";
    
        setTimeout(function(){ 
            menu.style.height = "auto";
        }, 300);
      } 
    });

    var botSpec = document.getElementById("bottom-special");
    botSpec.addEventListener("click", function(){
        
        console.log(event.targer);
        opcs.style.display = opcs.style.display == "block" ? "none" : "block";
        opcs.style.position = opcs.style.position == "relative" ? "absolute" : "relative";

    })


    resize();
  
    /*   window.addEventListener("resize", function() {
      resize();
      /* 768
             760
             757
         425
    }); */
}


function resize(){
  var demos_apresen = document.querySelector(".demos__apresen"),
      demos_text = document.querySelector(".demos__apresen-text");
      demos_img = document.querySelector(".demos__img-2"),
      demos_im = document.querySelector(".demos__img-2 img"),
      special = document.querySelector(".special"),
      special_div = document.querySelectorAll(".special__div"),
      specialities_div = document.querySelectorAll(".specialities__div"),
      specialities_contein = document.querySelectorAll(".specialities__contein");
      blk = "block";

  var lar = document.documentElement.clientWidth, 
      la = window.innerWidth;
  console.log("largura", lar, la);
  console.log("altura", document.documentElement.clientHeight);

  if(lar < 760 || la < 813){
    console.log("menor que 760");
    demos_apresen.classList.replace("demos__apresen", "--block");
    demos_text.classList.replace("demos__apresen-text", "--block-text");
    demos_img.style.width = "80vw";
    demos_img.style.height = "80vw";
    demos_im.style.height = "90vw";
    
    special_div.forEach(function(div){
      div.style.display = blk;
    });
    

   /* specialities_div.style.display = "block";
   specialities_contein.style.height = "auto"; */

   specialities_div.forEach(function(div){
    div.style.display = "block";
   })
      
   specialities_contein.forEach(function(div){
    div.style.height = "auto";
   })
  }
}

function remoneline(val){
  for(var i = 0; i < val.length; i++){
    val[i].classList = '';
    console.log(val[i].classList);
  } 
  console.log(event.target);
}
/* var li = document.getElementById("list");
li.addEventListener("click", function(event) {
    console.log(event.target); // este é o elemento clicado
    alert('O elemento clicado foi o ' + this.target.innerHTML);

    // dentro desta função o "this" refere-se ao <li>
}) */

/* mostra_menu(){

} */