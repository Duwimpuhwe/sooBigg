const startBtnPage = document.querySelector(".startBtn");

function handleAlert(){
  return alert("On the left panel of the page, click the skillset approach you would like to use.")
}

startBtnPage.addEventListener("click", ()=>{
  handleAlert();
})

