

function myFunction(name){
    paysdepart = document.getElementById("paysdepart").value;
    paysarrivee = document.getElementById("paysarrivee").value;
    datedepart = document.getElementById("departing").value;
    datearrivee = document.getElementById("datearrivee").value;
    adulte = document.getElementById("adulte").value;
    enfant = document.getElementById("enfant").value;
    classe = document.getElementById("classe").value;

}

function inscription() {
    var paysdepart = document.getElementById("paysdepart").value;
    localStorage.setItem("storageName",paysdepart);

    var paysarrivee = document.getElementById("paysarrivee").value;
    localStorage.setItem("storageName2",paysarrivee);
    
    var datedepart = document.getElementById("datedepart").value;
    localStorage.setItem("storageName3",datedepart);

    var datearrivee = document.getElementById("datearrivee").value;
    localStorage.setItem("storageName4",datearrivee);

    var adulte = document.getElementById("adulte").value;
    localStorage.setItem("storageName5", adulte);

    var enfant = document.getElementById("enfant").value;
    localStorage.setItem("storageName6",enfant);

    var classe = document.getElementById("classe").value;
    localStorage.setItem("storageName7",classe);
    
}

function affichage() {
    document.getElementById("td1").innerHTML = localStorage.getItem("storageName");

    document.getElementById("td2").innerHTML = localStorage.getItem("storageName2");

    document.getElementById("td3").innerHTML = localStorage.getItem("storageName3");

    document.getElementById("td4").innerHTML = localStorage.getItem("storageName4");

    document.getElementById("td5").innerHTML = localStorage.getItem("storageName5");

    document.getElementById("td6").innerHTML = localStorage.getItem("storageName6");

    document.getElementById("td7").innerHTML = localStorage.getItem("storageName7");
}