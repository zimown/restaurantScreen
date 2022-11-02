
function init() {
    document.getElementById("submitBtn").addEventListener("click",submit);

    var items = document.getElementsByClassName("add");
    var removeBtn = document.getElementsByClassName("delete");
    var edit = document.getElementsByClassName("edit");

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click",function() {addMeal(this.id);});
    }
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener("click",function() {deleteMeal(this.id);});
    }
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener("click",function() {chooseSize(1);});
    }
}
window.addEventListener("load",init);

function submit() {
    document.getElementById("alert").innerHTML = "<div class='alert alert-success' role='alert'>Your order has been sent to the kitchen!</div>";
}


function deleteMeal(id) {
    document.getElementById(id).style.display = "none";

}

function addMeal(id) {
    let name = document.getElementById("name"+id).innerHTML;
    document.getElementById("alert").innerHTML = "<div class='alert alert-success role='alert'><strong>" + name + "</strong> was added to your order!</div>";
    document.getElementById("food"+id).style.display = "block";
    let tot = parseInt(document.getElementById("totalPrice").innerHTML);
    switch (id) {
        case "1":
            document.getElementById("totalPrice").innerHTML = tot + 39;
            break;
        case "2":
            document.getElementById("totalPrice").innerHTML = tot + 159;
            chooseSize(id);
            break;
        case "3":
            document.getElementById("totalPrice").innerHTML = tot + 219;
            chooseSize(id);
            break;
        case "4":
            document.getElementById("totalPrice").innerHTML = tot + 79;
            break;
        case "5":
            document.getElementById("totalPrice").innerHTML = tot + 79;
            break;
        case "6":
            document.getElementById("totalPrice").innerHTML = tot + 15;
            break;
        case "7":
            document.getElementById("totalPrice").innerHTML = tot + 20;
            break;
    }
}

function chooseSize(id) {
    if (id == 2) {
        document.getElementById("alert").innerHTML = '<div id="choose2" class="alert alert-success" role="alert"><a class="delete" id="choose2"><p>x</p></a><h2 class="alert-heading">Parmesan & garlic wings</h2><form><div><p>Välj hur många:</p><input name="type" type="radio" id="5" value="5"><label for="5">5 pcs</label><br><input name="type" type="radio" id="10" value="10" checked="true"><label for="10">10 pcs</label><br><input name="type" type="radio" id="15" value="15"><label for="15">15 pcs</label></div><div><p>Portioner: </p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1"></div> <hr><input type="submit" value="Lägg till" class="choose submitBtn" id="2dish"></form></div>';

        document.getElementById("2dish").addEventListener("click",function() {document.getElementById("alert").innerHTML = "<div class='alert alert-success role='alert'><strong>Parmesan & garlic wings</strong> was added to your order!</div>";});
    } else if (id == 3) {
        document.getElementById("alert").innerHTML = '<div id="choose2" class="alert alert-success" role="alert"><a class="delete" id="choose2"><p>x</p></a><h2 class="alert-heading">Creamy pasta</h2><form><div><p>Välj typ:</p><input name="type" type="radio" id="5" value="5"><label for="5">Vegetarisk</label><br><input name="type" type="radio" id="10" value="10"><label for="10">Kyckling</label><br><input name="type" type="radio" id="15" value="15" checked="true"><label for="15">Oxfilé</label></div><div><p>Portioner: </p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1"></div> <hr><input type="submit" value="Lägg till" class="choose submitBtn" id="3dish"></div></form>';

        document.getElementById("3dish").addEventListener("click",function() {document.getElementById("alert").innerHTML = "<div class='alert alert-success role='alert'><strong>Creamy pasta with Oxfilé</strong> was added to your order!</div>";});
    } else {
        document.getElementById("alert").innerHTML = '<div id="choose2" class="alert alert-success" role="alert"><a class="delete" id="choose2"><p>x</p></a><h2 class="alert-heading">Default editing</h2><form><div><p>Välj vad du vill ändra:</p><input name="type" type="radio" id="5" value="5"><label for="5">Vegetarisk</label><br><input name="type" type="radio" id="10" value="10"><label for="10">Kyckling</label><br><input name="type" type="radio" id="15" value="15" checked="true"><label for="15">Oxfilé</label></div><div><p>Portioner: </p><input type="number" id="quantity" name="quantity" min="1" max="5" value="1"></div> <hr><input type="submit" value="Uppdatera" class="choose submitBtn" id="3dish"></div></form>';

        document.getElementById("3dish").addEventListener("click",function() {document.getElementById("alert").innerHTML = "<div class='alert alert-success role='alert'><strong>Ändrad!</strong></div>";});
    }
}