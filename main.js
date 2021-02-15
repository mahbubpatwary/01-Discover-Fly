// please advise me how can i marge 2 function with 1,
// i make paramitter (.value & .innerText) but not worked
const setValue = (id) => document.getElementById(id).value; 
const set = (id) => document.getElementById(id);


// please advise me how can i marge 2 function with (.value & .innerText),
// i make paramitter (value innerText) but not work 
const getValue = id => parseInt(document.getElementById(id).value);      
const getText = id => parseInt(document.getElementById(id).innerText);            

const error = "please enter valid quantity"
  
  
  
  
//---------please update programmingHero app please
//---------then i could Learn "ReactJs" (i've no computer) 
 




// total function for update total cost

function total(){
   let firstCost = getText("first-price");
   let economyCost = getText("economy-price");

    let subtotal = firstCost + economyCost;
    set("subtotal").innerText = subtotal;
    
    let vat = subtotal * 0.1;
    set("vat").innerText = vat;
    
    let total = subtotal + vat;
    set("total").innerText = total;
}total();



//---------please update programmingHero app please
//---------then i could Learn "ReactJs" (i've no computer) 
 





//buttonHandle function use for increaseing or decreasing button


function buttonHandle (quantityId, costId, price, condition){            

    let quantity = getValue(quantityId);
    if(quantity){
        condition ? quantity++ : quantity-- ;        
    }else{
       // quantity == 0? quantity++ :alert(error);
        quantity++
    }
    set(quantityId).value = quantity;

    let cost = quantity * price;
    set(costId).innerText = cost;
    total()
}





//---------please update programmingHero app please
//---------then i could Learn "ReactJs" (i've no computer) 
 







// input handle function use for handle typing input 

function inputHandle (quantityId, costId, price){            
    
    let quantity = getValue(quantityId);
    
    if(!quantity || quantity < 0){
        quantity = 0;
        alert(error);  
    }     
    set(quantityId).value = quantity 
    
    let cost = quantity * price;
    set(costId).innerText = cost;
    total()     
}
    
    
    
    
    
//---------please update programmingHero app please
//---------then i could Learn "ReactJs" (i've no computer) 
    



// jandleBokNow button use for Order submit 
    
    
function handleBookNow(){
    
    let firstQuantity = getValue("first-quantity");
    let economyQuantity = getValue("economy-quantity");                    
    
    if(firstQuantity || economyQuantity){
       set("booking-form").style.display = "none";
       set("popup").style.display = "block";
              
       let totalTicket = firstQuantity + economyQuantity;
       set("total-ticket").innerText = totalTicket;
       
       let total = getText("total");
       set("total-ticket-cost").innerText = total;
      
       let element2 = ` Economy Ticket ${economyQuantity} × $100 = $${economyQuantity * 100}`;
       let element = ` First Ticket  ${firstQuantity} × $150 = $${firstQuantity * 150}  ` ;   
       
       firstQuantity > 0 ? set("first-ticket").innerText = element  : set("first-ticket").innerText = "";         
       economyQuantity > 0 ? set("economy-ticket").innerText = element2 : 0;     
        
    }else{    
    alert("sorry you don't select any ticket");  
    
    }        
}
    







//---------please update programmingHero app please
//---------then i could Learn "ReactJs" (i've no computer) 
 





