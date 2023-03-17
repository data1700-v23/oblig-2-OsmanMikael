
function kjop(){
    let KundeX = {
        velgFilm: $("#velg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#telefon").val(),
        epost: $("#email").val()
    }
    $.post("/lagre", KundeX, function lagreKunde(){
        tilbakeAlle();
    });




        $("#velg").val(""),
        $("#antall").val(""),
        $("#fornavn").val(""),
        $("#etternavn").val(""),
        $("#telefon").val(""),
        $("#email").val("")

}

    function tilbakeAlle() {
        $.get("/sende", function (data) {
            formaterData(data);
        });
    }

function formaterData(Kundene){
    let ut = "<table class=\"table\"><tr><th scope='col'>Fornavn</th><th scope='col'>Etternavn</th><th scope='col'>Antall</th><th scope='col'>Film</th><th scope='col'>TelefonNr</th><th scope='col'>Epost</th></tr>";
   for (let enKunde of Kundene){
    ut += "<tr><td scope='row'>"+enKunde.fornavn+"</td><td>"+enKunde.etternavn+"</td><td>"+enKunde.antall+"</td><td>"+enKunde.velgFilm+"</td><td>"+enKunde.tlf+"</td><td>"+enKunde.epost+"</td></tr>";
   }
   ut += "</table>";
   $("#resultat").html(ut);

}


function slett(){
    $.get("/slett", function (){
        tilbakeAlle();
    });
}

