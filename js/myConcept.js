/**
 * Created by Nicole on 10/6/2015.
 */


(function(){


    var makeupBag = [];


    function Makeup(brand, name, type, expDate){

        this.brand = brand;
        this.name = name;
        this.type = type;
        this.expDate = expDate;
        this.makeupToString = function(){
          return "You have " + this.brand + " " + this.name+ " in your makeup bag. It expires on " + this.expDate + ".";
        };

    }


    function addToBag(){

        var inputBrand = document.getElementById('mkBrand').value;
        var inputName = document.getElementById('mkName').value;
        var inputType = document.getElementById('mkType').value;
        var inputExpDate = document.getElementById('mkExpDate').value;


    if (inputBrand != "" && inputName != "" && inputType != "" && inputExpDate != "") {

            var product_1 = new Makeup(inputBrand,inputName,inputType,inputExpDate);

            console.log(product_1.brand + ", " + product_1.name);

            document.getElementById('displayBag').textContent = product_1.makeupToString();

        }


        else if (inputBrand == "" || inputName == "" || inputType == "" || inputExpDate == ""){

            document.getElementById('displayBag').textContent = "Add something to your make up bag. :)";

        }


    }


    function eraseScreen (){

        document.getElementById('displayBag').textContent = "";
        makeupForm.reset();

    }


    var buttonMakeup = document.getElementById('makeupButton');
    buttonMakeup.onclick = addToBag;




})();