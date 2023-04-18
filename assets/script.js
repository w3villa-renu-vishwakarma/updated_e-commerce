
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
let multilevel_content = document.getElementById('multilevel')

 let multilevel =  document.getElementById("multi-level")
 multilevel.addEventListener("mouseover", mouseOver1);
 document.getElementById("multi-level").addEventListener("mouseout", mouseOut1);

 function mouseOver1() {
    multilevel_content.style.display = "block";
  }
function mouseOut1(){
    multilevel_content.style.display = "none";
}

let megamenu_content = document.getElementById('mega')

 let megamenu =  document.getElementById("megaa")
 megamenu.addEventListener("mouseover", mouseOver2);
 document.getElementById("megaa").addEventListener("mouseout", mouseOut2);

 function mouseOver2() {
    megamenu_content.style.display = "block";
  }
function mouseOut2(){
    megamenu_content.style.display = "none";
}
let all_content = document.getElementById('alldepartment')

 let all =  document.getElementById("allll")
 all.addEventListener("mouseover", mouseOver3);
 document.getElementById("allll").addEventListener("mouseout", mouseOut3);

 function mouseOver3() {
    all_content.style.display = "block";
  }
function mouseOut3(){
    all_content.style.display = "none";
}


function login(){
    let u_name = document.getElementById("uname").value;
    let u_psw = document.getElementById("psw").value;
    let record = new Array();
    record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    console.log(record)
    let matched = false;
    for(let i =0 ; i<record.length ; i++){
         if(record[i].email == u_name && record[i].psw == u_psw){
                  alert("login successfully")
                  matched = true;
                  break
         }         
    }
    if(!matched){
        alert("wrong data")
    }
}

function register() {
    let name = document.getElementById("username").value;
    let email = document.getElementById("uemail").value;
    let psw = document.getElementById("enterpsw").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => { return v.email == email })) {
        alert("duplicate data");
    }
    else {
        user_records.push({
            "name": name,
            "email": email,
            "psw": psw
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("register successfully")
    }

}