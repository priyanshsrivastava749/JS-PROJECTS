let cartcount=JSON.parse(localStorage.getItem("cartcountupdated"))||[];
display();
cart_itemdisplay();
cartmaindisplay();

function display() {

    let maincontent = document.querySelector('#main-box-container');
    if (!maincontent) {
        return;
    }
    let newhtml = '';
    for (let i = 0; i < itemarray.length; i++) {
        newhtml += `<div class="mainboxitem">
                    <img src="Myntra-main-items/${itemarray[i].image}.jpg" alt="item" class="mainitemimage">
                    <div class="rating">${itemarray[i].rating}⭐ | ${itemarray[i].review}</div>
                    <div class="companyname">
                    ${itemarray[i].companyname}</div>
                    <div class="itemname">${itemarray[i].itemname}</div>
                    <div class="pricing">
                        <span class="discountedprice">Rs ${itemarray[i].discountedprice}</span>
                        <span class="originalprice"><del>Rs ${itemarray[i].originalprice}</del></span>
                        <span class="discountpercentage">(${itemarray[i].discountpercentage}% OFF)</span>
                    </div>
                    <button class="itembutton"onclick="cart_sum(itemarray[${i}]);" >Add To Bag</button>
                </div>`;
    }
    maincontent.innerHTML = newhtml;
}

function cart_sum(itemarray){
    cartcount.push(itemarray);
    let bagitems = cartcount.length;
    localStorage.clear();
    localStorage.setItem("cartcountupdated",JSON.stringify(cartcount));
    document.querySelector('.bagnum').innerText=cartcount.length;

    cart_itemdisplay();
}
function cart_itemdisplay(){
    document.querySelector('.bagnum').innerText=cartcount.length;
}

function cartmaindisplay(){
    
    let cartitemnewhtml='';
    let totalmrp=0;
    let discountontotal=0;
    let conveniencefee=0;
    let totalamount=0;
    let maincontentcart=document.querySelector('.cartitems');
    for(let i=0;i<cartcount.length;i++){
        cartitemnewhtml+=`<div class="cartitemsindividual">
                        <img src="Myntra-main-items/${cartcount[i].image}.jpg" alt="" class="cartitemimage">
                        <div class="cartitemtext">
                            <div class="companynameCART">${cartcount[i].companyname}</div>
                            <div class="itemnamecart" style="color:rgba(83, 81, 81, 0.807) ;">${cartcount[i].itemname}</div>
                            <div class="cartpricing">
                                <span class="discountedpricecart"><b>Rs ${cartcount[i].discountedprice}</b></span>
                                <span class="originalpricecart"><del>Rs${cartcount[i].originalprice}</del></span>
                                <span class="discountpercentagecart">(${cartcount[i].discountpercentage}% OFF)</span>
                            </div>
                            <div class="returnpolicy"><b>14 days</b> return available</div>
                            <div class="deliverydate">Delivered by <span class="deliverydate" style="color: rgb(0, 255, 4);">10 Oct 2023</span></div>
                        </div>
                        <div class="remove_from_cart"><button class="cartdeletebtn"onclick="removecartfn(${i}); cartmaindisplay();pricedetail0(${cartcount.length})">✖</button></div>
                    </div>` 
                    totalmrp+=cartcount[i].originalprice;
                    discountontotal+=cartcount[i].originalprice-cartcount[i].discountedprice;
                    conveniencefee+=49;
                    totalamount+=(cartcount[i].discountedprice+49);
                    pricedetail(totalmrp,discountontotal,conveniencefee,totalamount);
    }
    maincontentcart.innerHTML=cartitemnewhtml;
}


function pricedetail(totalmrp,discountontotal,conveniencefee,totalamount){
    document.querySelector('.ordersummary').innerHTML=` <div class="cartpricelist">
                    <span>PRICE DETAIL(${cartcount.length} items)</span>
                    <div class="price_spans"><span class="summaryitem">Total MRP</span><span>Rs${totalmrp}</span></div>
                    <div class="price_spans"><span class="summaryitem">Discount on MRP</span><span style="color: rgb(0, 255, 17); font-size: smaller;">-Rs${discountontotal}</span></div>
                    <div class="price_spans"><span class="summaryitem">Convenience Fee</span><span>Rs ${conveniencefee}</span></div>
                </div>
                <div>
                    <div class="price_spans"><span>Total Amount</span><span>Rs ${totalamount}</span></div>
                    <button class="place-order-btn">PLACE ORDER</button>
                </div>`;
}

function removecartfn(i){
    cartcount.splice(i,1);
    let bagitems = cartcount.length;
    localStorage.clear();
    localStorage.setItem("cartcountupdated",JSON.stringify(cartcount));
    cart_itemdisplay();
}
function pricedetail0(i){
    if(i===1)pricedetail(0,0,0,0);
    else return;
}