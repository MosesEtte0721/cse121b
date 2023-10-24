import convertJson from "./convert.mjs";

let searchDiv = document.querySelector(".search-div");

let selectElement = ` 
                        <div class="product-search">
                  <label for="input-search"><input type="text"  id="input-search" placeholder="Search for specific product"></label>
                        <label for="search">
                            <button type="submit" id="search" >Search</button>
                        </label>
                    </div>  <select name="select-search" id="select-products">
                            <optgroup label="Clothing">
                                <option disabled selected >select products</option>
                                <option value="Trousers">Trousers </option>
                                <option value="Towels">Towels </option>
                                <option value="Socks">Socks </option>
                                <option value="T-Shirts">Shirts </option>
                                <option value="Caps">Cap </option>
                                <option value="Sneakers">Sneakers</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Slippers">Slippers</option>

                            </optgroup>
                            <optgroup label="Tech Products">
                                <option value="Phones">Phones</option>
                                <option value="Computers">Computers</option>
                                <option value="Laptops">Laptops</option>
                                <option value="Televisions">Televisions</option>
                                <option value="Watches">Wrist Watch</option>
                                <option value="Cameras">Cameras</option>
                                <option value="Routers">Routers</option>
                            </optgroup>
                        </select>      
                    
`;

searchDiv.innerHTML += selectElement;
let searchInput = document.querySelector("#input-search");
let searchBtn = document.querySelector("#search");

let menuBar = document.querySelector(".menu-bar");




let selectInput = document.querySelector("#select-products");


function mobileView(){
    document.querySelector("#hamburger").classList.toggle("off");
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7a24746280msh7d7e0e4857dadecp11b367jsn2fa936b108d6',
        'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    }
};

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '82b26b9184mshe2568d5ed2c6d1dp12e6b8jsna2e0f2be2c72',
//         'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
//     }
// };

// set the localStorage item
function setStorage(key, val) {
    return localStorage.setItem(key, JSON.stringify(val));
}

// GET data from localStorage
function getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}



let coy = "";
let url;
let localStore = getStorage("products") || [];

function clearSelect(){
    let inputer = document.querySelector("#select-products");
    inputer += "";
}


//  control flow function expression checks drop-down value
let switchControl = ()=> {
    clearSelect()
    switch (selectInput.value) {
        case "Trousers":
            coy = selectInput;
            console.log(coy)
           
            getApi(coy); 
            break;
            
        case "Socks":
            coy = selectInput;
            getApi(coy);
            break;

        case "T-shirts":
            coy = selectInput;
            getApi(coy);
            break;

        case "Sneakers":
            coy = selectInput;
            getApi(coy);
           break;

        case "Caps":
            coy = selectInput;
            getApi(coy);
            break;

        case "Shoes":
            coy = selectInput;
            getApi(coy);
            break;

        case "Slippers":
            coy = selectInput;
            getApi(coy);
            break;

        case "Towels":
            coy = selectInput;
            getApi(coy);
            break;
        case "Cameras":
            coy = selectInput;
            getApi(coy);
            break;
        case "Routers":
            coy = selectInput;
            getApi(coy);
            break;
        case "Televisions":
            coy = selectInput;
            getApi(coy);
            break;
        case "Laptops":
            coy = selectInput;
            getApi(coy);
            break;
        case "Phones":
            coy = selectInput;
            getApi(coy);
            break;
        case "Computers":
            coy = selectInput;
            getApi(coy);
            break;
        case"Watches":

            coy = selectInput;
            getApi(coy);
            break;
        default:
            console.log("Wrong Entry")
                break;
}

}

//creates list of products with template literal 
function template(info) {
    let loop = info.map(product => { //info[0].data.

        let photo = product.product_photos;
        let price = product.offer.price;
        return ` <article> <h3>${product.product_title}</h3> <h3 class="article-store">Store:${product.offer.store_name}</h3>
               <div class="picture-div"><a href=${product.product_page_url} _blank title=${product.product_title} class="article-anchor-1" >
                <picture><img src=${photo[0]} alt=${product.title}></picture></a>
                <a href=${product.product_page_url} _blank title=${product.product_title} class="article-anchor-2">
                <picture class = "secondary-photos">
                <img src=${photo[1]} alt=${product.title}><img src=${photo[2]} alt=${product.title}>
                <img src=${photo[3]} alt=${product.title}></picture></a>
                </div><h4 class="article-price">Price:${price}</h4><h4> Rating: ${product.product_rating}</h4><h4>Reviews:${product.product_num_reviews}</h4> </article>`
    })

    let doc = document.querySelector(".display-products");

    doc.innerHTML += loop;
}

// fetch products from amazon products 
let getApi = async (sac) => {
 url = `https://real-time-product-search.p.rapidapi.com/search?q=${sac.value}&country=us&language=en`;
//  url = `https://real-time-product-search.p.rapidapi.com/search?q=${sac.value}&country=us&language=en`;
    let getUrl = await fetch(url, options);
    let convert = await convertJson(getUrl);
    let loop = await convert.data.map(product => {
        let photo = product.product_photos;
        let price = product.offer.price;
        return product;
    })

    let temp = template(loop)
    localStore.push(loop);
    setStorage("products", localStore);

}



menuBar.addEventListener("click", (e)=>{
    e.preventDefault();
    mobileView();
});

selectInput.addEventListener("change", (e)=>{
    e.preventDefault();
    switchControl()
});

searchBtn.addEventListener("click", (e)=>{
    e.preventDefault();
  
     getApi(searchInput)
    

});
