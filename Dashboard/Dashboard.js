const sideMenu = document.querySelector("aside");

const menubtn=document.querySelector(".menu-btn");
const closebtn = document.querySelector(".close-btn");

const dark_mode = document.querySelector(".dark");
const light_mode = document.querySelector(".light")
//show the sidebar 
menubtn.addEventListener("click",()=> {
    sideMenu.style.display="block"
})
//close the sidebar 
closebtn.addEventListener("click",()=>{
        sideMenu.style.display="none"
})

//change the item
//if we click to the dark button
dark_mode.addEventListener("click",()=> {
    //chnge the background to the dark mode
    document.body.classList.add("dark-theme-variables");
    dark_mode.classList.add("active");
    //if the light button was actived shoold be desactived
    if(light_mode.classList.contains("active")){
        light_mode.classList.remove("active")
    }
})
//if we click to the light button
light_mode.addEventListener("click",()=> {
    //chnge the background to the light mode
    document.body.classList.remove("dark-theme-variables");
    light_mode.classList.add("active")
    //if the dark button was actived shoold be desactived
    if(dark_mode.classList.contains("active")){
        dark_mode.classList.remove("active")
    }    
})

//this is used to add the product to the table

orders.forEach(order =>{
    const tr = document.createElement("tr");
    const trcontent =`
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatu}</td>
                            <td class="${order.shipping === 
                            "Declined" ? "danger" : order.shipping
                            === "Pending" ? "warning" :
                            "primary"}">${orders.shipping}</td>
                            <td class="primary">Details</td>
                            `
    tr.innerHTML= trcontent;
    //this is to add the content to the table
    document.querySelector("table tbody").appendChild(tr)
})