/*
1. if ticket number is less then 100. per ticket price : 100;
2. if ticket number is more then 100, but less then 200.Then first 100 ticket will be 100/rest of ticket will be 90 taka per price.
3. if your purchase more then 200 tickets
    first 100-----------> 100
    100-200 ----------> 100
    200+    -----------> 100
*/ 
function ticketPrice (ticketQuantity){
    const first100Ticket =100; 
    const second100Ticket = 90;
    const restOfTicket = 70;
    if(ticketQuantity <= 100 ){
        const price = ticketQuantity * first100Ticket;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100price = 100 * first100Ticket;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Ticket;
        const totalPrice = first100price + restTicketPrice;
        return totalPrice;

    }
    else{ 
        const first100price = 100 * first100Ticket;
        const second100price = 100 * second100Ticket;
        const restTicketPrice = ticketQuantity - 200;
        const totalcost = first100price + second100price + restTicketPrice;
        return totalcost; 
    }
}

const price = ticketPrice(250);
console.log(price);