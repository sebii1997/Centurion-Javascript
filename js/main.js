const movies=[
    {
        id: 1,
        name: "Thor: Amor y Trueno",
        
        img:
          "https://wallpaperaccess.com/full/3334411.jpg",
        text:
          "descripcion de thor",
      },
      {
        id: 2,
        name: "variedad",
        
        img:
          "https://www.milenio.com/uploads/media/2022/04/27/peliculas-de-netflix-mas-vistas.jpg",
        text:
          "variedad",
      },
      {
        id: 3,
        name: "accion",
        
        img:
          "https://es.rollingstone.com/wp-content/uploads/2022/02/25-peliculas-que-debes-ver-en-el-2022-portada.jpg",
        text:
          "pelis de accion",
      },
      {
        id: 4,
        name: "mortal Kombat",
        
        img:
          "https://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_51579.jpg",
        text:
          "videojuegos",
      }
    ];
  
  const banner=document.getElementById("banner");
  const bannerText=document.querySelector(".banner__text");
  const bannerT=document.querySelector(".banner__title");
  const bannerP=document.querySelector(".banner__paraph");
  const left=document.getElementById("left");
  const right=document.getElementById("rigth");
  
  for(let i=0;i<movies.length;i++){
    let aux=movies[i];
    let div=document.createElement("div");
    
    div.style.background=`url(${aux.img})`;
    div.className="banner__container";
    div.setAttribute("id",i);
    
    if(div.getAttribute("id")!=0){div.style.display="none";}else{div.style.display="flex";}
    banner.appendChild(div);
  
  }
  let indice=0;
  
  function mostrar(){
      let i=movies[indice];
      banner.style.background=`url(${i.img})`;
      bannerT.textContent=i.name;
   
      bannerP.textContent=i.text;
      
      reset();
  }
  function reset(){
    banner.style.display.width="100%";
    banner.style.display.height="456px";
      
  }
  left.addEventListener("click",(e)=>{
      
      const DivActual=document.getElementById(indice);
      DivActual.style.display="none";
      DivActual.style.opacity="0";
     
      indice--;
  
      if (indice<0){
        indice=movies.length-1;
        const Div=document.getElementById(indice);
        Div.style.display="flex";
        Div.style.opacity="1";
     }else{
      const Div=document.getElementById(indice);
      Div.style.display="flex";
      Div.style.opacity="1";}
    mostrar();
  });
  
  right.addEventListener("click",(e)=>{
    
    const DivActual=document.getElementById(indice);
    DivActual.style.display="none";
    DivActual.style.opacity="0";
   
    indice++;
    
    if (indice>movies.length-1){
      indice=0;
      const Div=document.getElementById(indice);
      Div.style.display="flex";
      Div.style.opacity="1";
    }else{
      const Div=document.getElementById(indice);
      Div.style.display="flex";
      Div.style.opacity="1";
    }
    mostrar();
  });
  
  function slide(){
    const DivActual=document.getElementById(indice);
    DivActual.style.display="none";
    DivActual.style.opacity="0";
    
    
    if (indice>movies.length-1){
      indice=0;
      const Div=document.getElementById(indice);
      Div.style.display="flex";
      Div.style.opacity="1";
    }else{
      const Div=document.getElementById(indice);
      Div.style.display="flex";
      Div.style.opacity="1";
    }
    indice++;
    mostrar();
  }