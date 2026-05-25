const headerList = document.querySelectorAll(".anchorHeader");
const headerContainer= document.querySelectorAll("div.contentClass");


headerList.forEach(valHeader=>{
  valHeader.addEventListener("click",()=>{
    headerContainer.forEach(valContainer=>{
      if(valHeader.getAttribute("href").slice(1,)===valContainer.getAttribute("id")){
        valContainer.style.display="block"; 
      } else{
        valContainer.style.display="none";         
      }
    })

  })
})





