

document.addEventListener("DOMContentLoaded", ()=>{
  const commNavBar = document.querySelector(".nav-container"); //Select element
//used DOMContentLoaded event to help first fully loaading HTML and run the JS code; moving it inside here is crucial
   
  //Creating navigation bar content
  commNavBar.innerHTML = `
        <a class="page_link page_home" href="/index.html">
          <img class="logoImage" src="/assets/images/myLogo.png" alt="brandLogo" width="70px" height="70px"/>
          <span class="linkHome">sooBigg</span>
        </a>
        <a class="page_link page_portfolio" href="/pages/portfolio.html">Portfolio</a>
        <a class="page_link page_about" href="/pages/about.html">About</a>
        <!-- <a class="page_link page_buy" href="/pages/buy.html">Buy</a> -->
        `;

        const pageNavLinks = document.querySelectorAll(".page_link"); //Select all element with link class name
        //use for each to loop throught each element of link class name
        // linkElement.href to get the link(path) of that specific elemt, can even Use getAttribute() method
        // window.location.href, find location of the webpage and grab the href
        pageNavLinks.forEach(linkElement => {
          if (linkElement.href === window.location.href) {
            linkElement.classList.add("active"); // add a class name "active" to help style when am on page
          }
        });
});

