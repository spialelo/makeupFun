/**
 * Created by Nicole on 10/6/2015.
 */


(function(){


    /* makeupBag array of contents */
    var makeupBag = [];


    /* General makeup object */
    function Makeup(brand, mkname, mktype, expDate){
        this.brand = brand;
        this.mkname = mkname;
        this.mktype = mktype;
        this.expDate = expDate;
        this.makeupToString = function(){
          return "You have "+this.brand + " "+this.mkname+ " in your makeup bag. It has an expiration date of "+this.expDate+". It is a "+this.mktype+".";
        };
    }
    /* end of General makeup object */


    /* Adding things to the bag */
    function addToBag(){

        var inputBrand = document.getElementById('mkBrand').value;
        var inputName = document.getElementById('mkName').value;
        var inputType = document.getElementById('mkType').value;
        var inputExpDate = document.getElementById('mkExpDate').value;


        if(inputBrand != "" && inputName != "" && inputType != "" && inputExpDate != "") {

            var product_1 = new Makeup(inputBrand,inputName,inputType,inputExpDate);
            makeupBag.push(product_1);
            document.getElementById('feedbackMakeup').textContent = makeupBag.length + " item(s) in your makeup bag.";

        /*console.log(product_1.brand + ", " + product_1.name);
        document.getElementById('displayBag').textContent = product_1.makeupToString();*/

        }

        else if(inputBrand == "" || inputName == "" || inputType == "" || inputExpDate == ""){

            document.getElementById('displayBag').textContent = "Add something to your make up bag. :)";

        }

        document.getElementById('mkBrand').value = "";
        document.getElementById('mkName').value = "";
        document.getElementById('mkType').value = "";
        document.getElementById('mkExpDate').value = "";

    }
    /* end of Adding things to the bag */


    /* display what is in the bag */
    function showBag (){
      for(var i = 0; i < makeupBag.length; i++){
          document.getElementById('displayBag').innerHTML += makeupBag[i].brand + " " +makeupBag[i].mkname +"<br>";
      }
    }
    /* end of display what is in the bag */


    /* search the bag/array of objects */
    function searchBag(arguments){

    }
    /* search the bag/array of objects */


    var buttonAddMakeup = document.getElementById('addMakeupButton');
    buttonAddMakeup.onclick = addToBag;

    var displayMakeupBag = document.getElementById('showMakeupButton');
    displayMakeupBag.onclick = showBag;


    /*starting all over */

    function eraseDiv() {

        var displayField = document.getElementById('displayBag');
        var feedbackField = document.getElementById('feedbackMakeup');

        /*Reset the display area to an empty square.*/
        displayField.textContent = "";
        feedbackField.textContent = "";

        var form = document.getElementById('makeupForm');

        /*Reset form values.*/
        form.reset();

        /*Reset the display area size to the original values.*/
        displayField.style.width = "400px";
        displayField.style.height = "400px";

    }

    var resetButton = document.getElementById('resetButton');
    resetButton.onclick = eraseDiv;

})();