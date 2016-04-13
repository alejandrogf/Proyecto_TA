'use strict';

//Variables globales para
//Contexto
var context;
//Listas
var tareasList;
var alumnosList;
//items
var tareas;
var alumnos;
//item seleccionado
var tareaActual;
var alumnoActual;




var getAlumnos = function () {
    var t = $("#tablaAlumnos>tbody>tr");
    t.remove();

    alumnosList = context.get_web().get_lists().getByTitle("ListaAlumno");
    alumnos = alumnosList.getItems(new SP.CamlQuery());
    context.load(alumnos);
    context.executeQueryAsync(Function.createDelegate(this, onSuccessAlumnos),
                              Function.createDelegate(this, onFail));
    
};

function onSuccessAlumnos() {
    if (alumnos.get_count() != 0) {
        
        var listAlumnos = alumnos.getEnumerator();
        var tabla = $("#tablaAlumnos tbody");
        
        while (listAlumnos.moveNext()) {
            var html = "<tr>";
            var actual = listAlumnos.get_current();
            html += "<td>" + actual.get_item("CodigoAlumno");
            html += "<td>" + actual.get_item("NombreAlumno") + "</td>";
            html += "<td>" + actual.get_item("ApellidosAlumno") + "</td>";
            html += "<td>" + actual.get_item("DNI") + "</td>";
            html += "<td>" + actual.get_item("NombreCompletoAlumno") + "</td>";
            html += "<td>" + actual.get_item("Curso") + "</td>";
            html += "<td>" + actual.get_item("NotaMedia") + "</td>";
            html += "</tr>";
            tabla.append(html);
        }
        $(".botones").css("display", "block");
        //var nombre = actual.get_item("Cliente_x003a_Full_x0020_Name").get_lookupValue();
        //$("#Nombre").text(nombre);
        //$("#NumeroPedidos").text("Pedidos: " + (n - 1));
        //$("#MostrarPedidos").css("display", "block");
        //$("#SinPedidos").css("display", "none");
    }
    //else {
    //    $("#MostrarPedidos").css("display", "none");
    //    $("#SinPedidos").css("display", "block");
    //}
}

function onFail() {

    alert("Error");

}

function nuevo_alumno() {
    $('#new-item-form-Alumno').fadeOut('fast', function () {

        //$('#item-display-asunto').html(sugerenciaActual.get_item('Asunto'));

        //$('#item-display-sugerencia').html(sugerenciaActual.get_item('Sugerencia'));

        //contarVotos();
        
        $('#new-item-form-Alumno').fadeIn('fast');

    });
}

function guardar_alumno() {
    //var itemCreateInfo = SP.ListItemCreationInformation();
    //alumnoActual = alumnosList.addItem(itemCreateInfo);
    //alumnoActual.set_item('ApellidosAlumno', $('#inputApellidosAl').val().toString());
    //alumnoActual.set_item('CodigoAlumno', $('#inputCodigoAl').val().toString());
    //alumnoActual.set_item('NombreAlumno', $('#inputNombreAl').val().toString());
    //alumnoActual.set_item('DNI', $('#inputDNIAl').val().toString());
    //alumnoActual.set_item('Curso', $('#inputCursoAl').val().toString());

    var nombreAux = $('#inputNombreAl').val() + "" + $('#inputApellidosAl').val();
    //alumnoActual.set_item('NombreCompletoAlumno', nombreAux.toString());

    //alumnoActual.update();
    //context.load(alumnoActual);
    //context.executeQueryAsync(onCreateSugerenciaSuccess, onFail);
    var formDigest = $('#__REQUESTDIGEST').val();
    var url = _spPageContextInfo.webServerRelativeUrl +
              "/_api/web/lists/getByTitle('ListaAlumno')/items";
    
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify({
            '__metadata': { 'type': 'SP.Data.ListaAlumnoListItem' },
            'ApellidosAlumno': $('#inputApellidosAl').val().toString(),
            'CodigoAlumno': $('#inputCodigoAl').val().toString(),
            'NombreAlumno': $('#inputNombreAl').val().toString(),
            'DNI': $('#inputDNIAl').val().toString(),
            'Curso': $('#inputCursoAl').val().toString(),
            'NotaMedia':0,
            'NombreCompletoAlumno': nombreAux
        }),
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': formDigest
        },
        success: function () {
            alert("Alumno registrado en Evilness HighSchool of Dark Lords & Ladies");
            $('#new-item-form-Alumno').fadeOut('fast');
            $("#new-item-form-Alumno input").each(function() {
                this.value = "";
            });
            getAlumnos();
        },
        error: function (err) {
            alert(JSON.stringify(err));
        }
    });
}



//var onCreateSugerenciaSuccess = function () {

//    getAlumnos();

//};










var getTareas = function () {
    var t = $("#tablaTareas>tbody>tr");
    t.remove();

    tareasList = context.get_web().get_lists().getByTitle("ListaTarea");
    tareas = tareasList.getItems(new SP.CamlQuery());
    context.load(tareas);
    context.executeQueryAsync(Function.createDelegate(this, onSuccessTareas),
                              Function.createDelegate(this, onFail));

};

function onSuccessTareas() {
    if (tareas.get_count() != 0) {

        var listTareas = tareas.getEnumerator();
        var tabla = $("#tablaTareas tbody");

        while (listTareas.moveNext()) {
            var html = "<tr>";
            var actual = listTareas.get_current();
            html += "<td>" + actual.get_item("NombreTarea");
            html += "<td>" + actual.get_item("FechaLimiteTarea") + "</td>";
            html += "<td>" + actual.get_item("NotaTarea") + "</td>";
            html += "<td>" + actual.get_item("CodAlumnoLookUp").get_lookupValue() + "</td>";
            
            html += "</tr>";
            tabla.append(html);
        }
        $(".botones").css("display", "block");
        //var nombre = actual.get_item("Cliente_x003a_Full_x0020_Name").get_lookupValue();
        //$("#Nombre").text(nombre);
        //$("#NumeroPedidos").text("Pedidos: " + (n - 1));
        //$("#MostrarPedidos").css("display", "block");
        //$("#SinPedidos").css("display", "none");
    }
    //else {
    //    $("#MostrarPedidos").css("display", "none");
    //    $("#SinPedidos").css("display", "block");
    //}
}

function onFail() {

    alert("Error");

}

function nueva_tarea() {
    $('#new-item-form-Tarea').fadeOut('fast', function () {

        $('#new-item-form-Tarea').fadeIn('fast');

    });
}

function guardar_tarea() {
    var formDigest = $('#__REQUESTDIGEST').val();
    var url = _spPageContextInfo.webServerRelativeUrl +
              "/_api/web/lists/getByTitle('ListaTarea')/items";

    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify({
            '__metadata': { 'type': 'SP.Data.ListaTareaListItem' },
            'NotaTarea': $('#inputNotaTarea').val().toString(),
            'NombreTarea': $('#inputNombreTarea').val().toString(),
            'FechaLimiteTarea': $('#inputFechaTarea').val().toString(),
            'CodAlumnoLookUp': ""
            }),
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': formDigest
        },
        success: function () {
            alert("Tarea maléfica registrada en el Grimorio.");
            $('#new-item-form-Tarea').fadeOut('fast');
            $("#new-item-form-Tarea input").each(function () {
                this.value = "";
            });
            getTareas();
        },
        error: function (err) {
            alert(JSON.stringify(err));
        }
    });
}











var init = function () {
    context = SP.ClientContext.get_current();
    getAlumnos();
};

$(document).ready(function () {
    ExecuteOrDelayUntilScriptLoaded(init, "sp.js");
});