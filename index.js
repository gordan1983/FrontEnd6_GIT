function Atm(options = {}){
    this.pin = options.pin;
    this.money = options.money;
};


var user1 = new Atm({
    pin: 1234,
    money: 500,
});


var user2 = new Atm({
    pin: 4321,
    money: 1000,
});

var user3 = new Atm({
    pin: 1122,
    money: 1200,
});

var user4 = new Atm({
    pin: 2211,
    money: 300,
});



/*Atm.prototype.pinAllocation = function(insertPin, amount){
    var me = this;
    (function(){
    me = new Atm ({
    pin: insertPin,
    money: amount
});
    console.log(me);
    })();
}*/

Atm.prototype.withdraw = function(insertPin, amount){
    var me = this;

 
    
if(me.pin === insertPin && amount < me.money){
    me.money = me.money - amount;
    console.log("User pin corect" + "-----" + "Available fonds ", me.money );
}
   else if(amount > me.money){
       console.log("Insuficient fonds")
   }
    else {
        console.log("Incorect pin number");
    }
 
   
}
  
user1.withdraw(1234, 300);
//user2.withdraw(4321, 600);
//user1.pinAllocation(1234, 500);

1. dan //commit
2. Scoala Informala //commit
3. test1
4. test2



