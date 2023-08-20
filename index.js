 let totalPrice = 0.00;
 function handleClick(target){
    const selectedItemContainer = document.getElementById('selected-item');
    
    const itemName =target.childNodes[3].childNodes[3].innerText
    const count = selectedItemContainer.childElementCount
    const p = document.createElement('p');
    
   p.classList.add('text-2xl')
   p.classList.add('font-medium')
   p.classList.add('mb-6')
   
    p.innerHTML = `
    ${count + 1}. ${itemName}
    `
    selectedItemContainer.appendChild(p)

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
     totalPrice = totalPrice + parseFloat(price);
    
      document.getElementById('total-price').innerText = totalPrice; 
      document.getElementById('total').innerText = totalPrice; 
     
    const makePurchaseBtn = document.getElementById('make-purchase') 
     const applyBtn = document.getElementById('apply-btn')

     if(totalPrice >= 0.00 ){
        makePurchaseBtn.removeAttribute('disabled')
     }
     else{
        makePurchaseBtn.setAttribute('disabled',true);
     }

     if(totalPrice >= 200.00 ){
        applyBtn.removeAttribute('disabled')
        
     }
     else{
       applyBtn.setAttribute('disabled',true);
     }
    // setDiscountValue(totalPrice)
}    

 document.getElementById('apply-btn').addEventListener('click',function(){
            
    const coupon = document.getElementById('coupon');
    const discount = (totalPrice * 20)/100;
    const discountValue = totalPrice - discount;
    const couponValue = coupon.value ;
    coupon.value = '';
    if(couponValue === 'SELL200'){
        document.getElementById('discount').innerText = discount;
        document.getElementById('total').innerText = discountValue;
    }
    else{
        alert('please write a SELL200')
                
    }
})
   
   