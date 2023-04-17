function owl() {
    $(".myowl").owlCarousel({
        loop: true,
        margin: 23,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1250: {
                items: 4,
            },
        },
    });
}

displayProducts();
async function displayProducts() {
    let response = await fetch("assets/first.json");
    let responsData = await response.json();
    let data = responsData.products;
    let whyBuyContainer = document.getElementById("featured-products");
    let container = ` 
        <div class="owl-carousel owl-theme myowl">`;
    for (i in data) {
        container += `
        <div class="item">
            <div class="featured-products-card">
                    <div class="image-container">
                        <img src="${data[i].image}" alt=""> 
                     <div class="labels">
                       <div class="cross-labels">
                        <p class="red-bg">
                            <strong>${data[i].badge}</strong>
                        </p>                 
                    
                      </div>
                      <div class="right-labels">
                      <p class="yellow-bg ">
                      <strong>${data[i].sale}</strong>
                      </p>
              
                         <p class="red-bg ">
                         <strong>${data[i].sale}</strong>
                         </p>
                         </div>
                     </div>
             
                    </div>
             
              <div class="brand-model">
                  <a >
                      <p>${data[i].model}</p>
                  </a>
                  <p>${data[i].brand}</p>
              </div>
                <div class="cart-container">
                  <h2>${data[i].name}</h2>
                  <p class="price">${data[i].price} <span><del>${data[i].cutprice}</del></span></p>
                  <div class="add-to-cart-container">
                      <div>
                          <input type="number" id="${data[i].id}-no-of-item" value="1">
                          <input type="button" id="${data[i].id}" onclick="addToCart(${data[i].id})" value="ADD TO CART">
                      </div>
                      <div>
                          <i style="font-weight:100" class="fa-solid fa-heart" onclick="addToWishList(${data[i].id})"></i>
                          <i class="fa-solid fa-arrow-right-arrow-left"></i>
                      </div>
                  </div>
              </div>
                <div class="buy-now-question-container ">
                  <div>
                      <i class="fa-solid fa-dollar-sign"></i>
                      <p>Buy Now</p>
                  </div>
                  <div>
                      <i class="fa-solid fa-question"></i>
                      <p>Question</p>
                  </div>
              </div>
          </div>
        </div>  `;

    }
    container += `</div>`;
    whyBuyContainer.innerHTML = container;
    owl();
}
async function displayWhyBuyUs(elem) {
    let response = await fetch("assets/why_buy_us.json");
    let responseData = await response.json();
    console.log(responseData)
    var data;
    console.log(elem)
    switch (elem) {
        case "top_categories":
            data = responseData.why_buy_us[0]["top-categories"];
            console.log(data)
            break;
        case "electronics":
            data = responseData.why_buy_us[0]["electronics"];
            console.log(data)
            break;
        case "beauty":
            data = responseData.why_buy_us[0]["beauty"];
            console.log(data)
            break;
        case "fashion":
            data = responseData.why_buy_us[0]["fashion"];
            console.log(data)
            break;
    }
    let whyBuyContainer = document.getElementById("why-buy");
  let container = ` <div class="owl-carousel owl-theme myowl1 img-container d-flex">`;
  for (i in data) {
    container += `
  <div class="item text-center">
    <img src="${data[i].image}" alt="...">
    <div class="btn-center">
    <button class="btn btn-light btn-large">${data[i].button}</button>
    </div>
 </div>`;
  }
  
  container += `</div>`;
  whyBuyContainer.innerHTML = container;
  owl1()
}

function toggleWhyBuyCategories(elem) {
    let activElem = document.getElementsByClassName("active-why-buy")[0];
    activElem.classList.remove("active-why-buy");
    elem.classList.add("active-why-buy");
    displayWhyBuyUs(elem.innerHTML.trim());
}
function toggleFeaturedCategories(elem) {
  let activElem = document.getElementsByClassName("active-featured")[0];
  activElem.classList.remove("active-featured");
  elem.classList.add("active-featured");
  displayProducts(elem.innerHTML.trim());
}
  

displayWhyBuyUs("top_categories");
function owl1() {
    //for  display Why Buy Us
    $(".myowl1").owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1246: {
          items: 4,
        },
        1400: {
          items: 5,
        },
      },
    });
  }

  let slideIndex = 0;
  showSlides(); 
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }