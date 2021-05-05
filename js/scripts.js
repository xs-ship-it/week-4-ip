function Pizza( size, crust, toppings, quantity){
    this.selectedSize = size;
    this.selectedCrust = crust;
    this.selectedToppings = toppings;
    this.selectedQuantity = quantity;
  }
  
  Pizza.prototype.calcTotal = function(deliveryPrice) {
    var total = 0;
    total += sizeCalcPrice(this.selectedSize);
    total += sizeCalcPrice(this.selectedSize);
    total += sizeCalcPrice(this.selectedSize);
    total = total * this.selectedQuantity; 
    total += deliveryPrice;
    return total;
  }
  
  var sizePrice = {
    small: 400,
    medium: 800,
    large: 1000
  };
  
  var crustPrice = {
    extraCheese: 250,
    stuffed: 150,
    wholeWheat: 100
  };
  

  var toppingPrice = [
    {
      ham: {
        price:200,
      },
      pineApple: {
        price:200,
      },
      pepperoni: {
        price:200
      },
      
    }
  ];
  
  function sizeCalcPrice(size) {
    if (size === "small") {
      return sizePrice.small;
    } else if (size === "medium") {
      return sizePrice.medium;
    } else {
      return sizePrice.large;
    }
  }
  

  function crustCalcPrice(crust) {
    if (crust === "extra cheese") {
      return crustPrice.extraCheese;
    } else if (crust === "stuffed") {
      return crustPrice.stuffed;
    } else {
      return crustPrice.wholeWheat;
    }
  };
  

  function toppingsCalcPrice(topping) {
    if (topping === "ham") {
      return toppingPrice.ham;
    } else if (topping === "pineapple") {
      return toppingPrice.pineapple;
    } else {
      return toppingPrice.pepperoni;
    } 
  };
  
  $(document).ready(function(){
    $('#form').submit(function(event){
      event.preventDefault();
  
      var selectedDeliver = parseInt($('#delivery-option').val());
      var deliveryPrices = [150, 0]
      var crust = $('#crust').val();
      var toppings = $('#toppings').val();
      var size = $('#size').val();
      var inputtedQuantity = parseInt($('#quantity').val());
      var deliveryPrice = deliveryPrices[selectedDeliver-1];
  
      var newPizza = new Pizza(size, crust, toppings, inputtedQuantity);
      
      var size = $("#size").find(":selected").val();
      alert("Your order is size " + newPizza.selectedSize + ' ,' + newPizza.selectedToppings + ' and ' + newPizza.selectedCrust + " pizza. Click ok to view your bill");
  
      var deliver = confirm(
        "your pizza will be delivered at transport cost ksh 150."
      );
  
      if (deliver) {
        var place = prompt("Enter your location");
        $("#place").text(place);
        $("#success").show(); {
          alert("Your order will be delivered to you");
        } 
      } else {
        $("#no-delivery").show();
      }
      
      alert("your bill is " + newPizza.calcTotal(deliveryPrice));
      document.getElementById('allme').reset();
  
    });
  });
  
