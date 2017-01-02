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
    }
    /* end of General makeup object */


    /* Adding things to the bag */
    function addToBag(){

        var inputBrand = document.getElementById("mkBrand").value;
        var inputName = document.getElementById("mkName").value;
        var inputType = document.getElementById("mkType").value;
        var inputExpDate = document.getElementById("mkExpDate").value;


        if(inputBrand != "" && inputName != "" && inputType != "" && inputExpDate != "") {

            var product_1 = new Makeup(inputBrand,inputName,inputType,inputExpDate);
            makeupBag.push(product_1);
            document.getElementById("feedbackMakeup").textContent = makeupBag.length + " item(s) in your makeup bag.";


        }

        else if(inputBrand == "" || inputName == "" || inputType == "" || inputExpDate == ""){

            document.getElementById("displayBag").textContent = "Add something to your make up bag. :)";

        }

        document.getElementById("mkBrand").value = "";
        document.getElementById("mkName").value = "";
        document.getElementById("mkType").value = "";
        document.getElementById("mkExpDate").value = "";

    }
    /* end of Adding things to the bag */


    /* display what is in the bag */
    function showBag (){
      for(var i = 0; i < makeupBag.length; i++){
          document.getElementById("displayBag").innerHTML += makeupBag[i].brand + " " +makeupBag[i].mkname +"<br>";
      }
    }
    /* end of display what is in the bag */


    /* search the bag/array of objects */
    function search(searchMatch){
         this.searchMatch = searchMatch;
        /*this.searchByName = function(){};
        this.searchByMkType = function(){};
        this.searchByExpDate = function(){};*/
    }
    /* search the bag/array of objects */

    /*search.prototype.searchByBrand = function(searchMatch){

            var searchResults = " ";

              for(var j = 0; j < makeupBag.length; j++){

                if (this.searchMatch == makeupBag[j].brand){
                    searchResults += makeupBag[j] +"<br>"
                }

      }
            document.getElementById("displayBag").innerHTML = searchResults;
            console.log(searchResults);
        };*/


    function searchByBrand (searchMatch){
            this.searchMatch = searchMatch;
            var searchResults = " ";

              for(var j = 0; j < makeupBag.length; j++){

                if (this.searchMatch == makeupBag[j].brand){
                    searchResults += "You have "+makeupBag[j].brand + " "+makeupBag[j].mkname+ " in your makeup bag. It has an expiration date of "+makeupBag[j].expDate+". It is a "+makeupBag[j].mktype+".<br>";
                }

      }
            document.getElementById("displayBag").innerHTML = searchResults;
            console.log(searchResults);
        };


    function searchMkBag(){

        
        var sel = document.getElementById("searchDrop");
        var dropDownSelected = sel.options[sel.selectedIndex].value;
        var searchFor = document.getElementById("searchInput").value;

        switch(dropDownSelected){
            case "makeBrand":
                console.log("search by makeBrand");
                return searchByBrand(searchFor);
                break;
            case "makeName":
                console.log("search by makeName");
                //console.log(search.searchByName);
                break;
            case "makeType":
                console.log("search by makeType");
                 //console.log (search.searchByMkType);
                break;
            case "makeExpDate":
                console.log("search by makeExpDate");
                //console.log(search.searchByExpDate);
                break;
            default:
                console.log("Select one of the values from the drop down.");
                break;


        }

    }



    var buttonAddMakeup = document.getElementById("addMakeupButton");
    buttonAddMakeup.onclick = addToBag;

    var displayMakeupBag = document.getElementById("showMakeupButton");
    displayMakeupBag.onclick = showBag;

    var searchTheBag = document.getElementById("searchByButton");
    searchTheBag.onclick = searchMkBag;



















    /*starting all over */

    function eraseDiv() {

        var displayField = document.getElementById("displayBag");
        var feedbackField = document.getElementById("feedbackMakeup");

        /*Reset the display area to an empty square.*/
        displayField.textContent = "";
        feedbackField.textContent = "";

        var form = document.getElementById("makeupForm");

        /*Reset form values.*/
        form.reset();

        /*Reset the display area size to the original values.*/
        displayField.style.width = "400px";
        displayField.style.height = "400px";

    }

    var resetButton = document.getElementById("resetButton");
    resetButton.onclick = eraseDiv;

})();