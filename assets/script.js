
let data = [];

fetch("assets/first.json")
    .then((response) => response.json())
    .then((res) => {
        data = res.products;
    })
document.getElementById('search').addEventListener('keyup', (e) => {
    let keyword = e.target.value.toLowerCase();
    let filterdata = data.filter((item) => {
        return (
            item.name.toLowerCase().includes(keyword)
        )
    })
    display(filterdata)
    if(e.keyCode === 13)
    {
        console.log("hiih");
        let keyword = e.target.value.toLowerCase();
        let filterdata = data.filter((item) => {
            return (
                item.name.toLowerCase().includes(keyword)
            )
        })
       console.log(filterdata);
       sessionStorage.setItem("pro_id",JSON.stringify(filterdata));
        window.location.href = "search.html";

    }
})

const display = (items) => {
    document.getElementById('list').innerHTML = items.map((item) => {
        let { name, model, price, brand, image, id } = item;
        return (
            `<div class=" container-one d-flex" onclick="search(${id});sessionStorage.setItem('p_id', ${id});
            " id="filter">

                <div class="images">
                    <img src=${image} height="80px" width="100px" />
                </div>
                <div class="name">
                    <p>${name}</p>
                    <span class="price">
                        <p>${price}</p>
                    </span>
                    <br>
                    

                </div>
            </div>
                `
        )
    }).join('')
}
display(data)
// searching item
function search(product_id) {
    
    window.location.href = "search.html";
    

}

// modal 
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");

const trigger = document.querySelector(".trigger");
const trigger2 = document.querySelector(".trigger2");

const closeButton = document.querySelector(".close-button");
const closeButton2 = document.querySelector(".close-button2");


function toggleModal() {
    modal.classList.toggle("show-modal");
}
function toggleModal2() {
    modal2.classList.toggle("show-modal2");

}
trigger2.addEventListener("click", toggleModal2);
trigger.addEventListener("click", toggleModal);

closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleModal2);

//    searching
let rangeMin = 100;
        const range = document.querySelector(".range-selected");
        const rangeInput = document.querySelectorAll(".range-input input");
        const rangePrice = document.querySelectorAll(".range-price input");
        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minRange = parseInt(rangeInput[0].value);
                let maxRange = parseInt(rangeInput[1].value);
                if (maxRange - minRange < rangeMin) {
                    if (e.target.className === "min") {
                        rangeInput[0].value = maxRange - rangeMin;
                    } else {
                        rangeInput[1].value = minRange + rangeMin;
                    }
                } else {
                    rangePrice[0].value = minRange;
                    rangePrice[1].value = maxRange;
                    range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
                    range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
                }
            });
        });
        rangePrice.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = rangePrice[0].value;
                let maxPrice = rangePrice[1].value;
                if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

 let fullwidth_content = document.getElementById('fullwidth')
 let fullwidth =  document.getElementById("full-width")
 fullwidth.addEventListener("mouseover", mouseOver);
 document.getElementById("full-width").addEventListener("mouseout", mouseOut);

 function mouseOver() {
    fullwidth_content.style.display = "block";
  }
function mouseOut(){
    fullwidth_content.style.display = "none";
    fullwidth.style.backgroundColor ="none";
}