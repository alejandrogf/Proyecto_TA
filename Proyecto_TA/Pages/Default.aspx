<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Alumnator
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    
    

    <div id="listaTareas">
        <p>Listado de Tareas:</p>
        <table id="tablaTareas" border="1" style="border-collapse:collapse">

            <thead>
            <tr>
                <th>
                    Nombre Tarea
                </th>
                <th>
                    Fecha Límite
                </th>
                <th>
                    Código Alumno
                </th>
                <th>
                    DNI Alumno
                </th>
                <th>
                    Nota Tarea
                </th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    
    

    <div id="listaAlumnos">
        <p>Listado de Alumnos:</p>
        <table id="tablaAlumnos" border="1" style="border-collapse:collapse">

            <thead>
            <tr>
                <th>
                    Codigo Alumno
                </th>
                <th>
                    Nombre Alumno
                </th>
                <th>
                    Apellidos Alumno
                </th>
                <th>
                    DNI Alumno
                </th>
                <th>
                    Nombre Completo Alumno
                </th>
                <th>
                    Curso Alumno
                </th>
                <th>
                    Nota Media Alumno
                </th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    
    <div id="new-item-form-Tarea" style="display: none">
        Registro de Tareas

        <div class="new-item-form-line">
            <span class="new-item-form-label">Nombre Tarea:</span>
            <span class="new-item-form-field">
                <input id="inputNombreTarea" class="new-item-form-control" type="text" />
            </span>
        </div>

        <div class="new-item-form-line">
            <span class="new-item-form-label">Fecha Limite:</span>
            <span class="new-item-form-field">
                <input id="inputFechaTarea" class="new-item-form-control" type="text" />
            </span>
        </div>
        
        <div class="new-item-form-line">
            <span class="new-item-form-label">Nota Tarea:</span>
            <span class="new-item-form-field">
                <input id="inputNotaTarea" class="new-item-form-control" type="text" />
            </span>
        </div>
        
        <div class="new-item-form-line">
            <span class="new-item-form-label">Código Alumno:</span>
            <span class="new-item-form-field">
                <input id="inputCodAl" class="new-item-form-control" type="text" />
            </span>
        </div>
        <input type="button" onclick="guardar_tarea();" value="Guardar" style="display: block"/>
    </div>
    
    <div id="new-item-form-Alumno" style="display: none">
        Registro de Alumnos
        
        <div class="new-item-form-line">
            <span class="new-item-form-label">Código Alumno:</span>
            <span class="new-item-form-field">
                <input id="inputCodigoAl" class="new-item-form-control" type="text" />
            </span>
        </div>

        <div class="new-item-form-line">
            <span class="new-item-form-label">Nombre Alumno:</span>
            <span class="new-item-form-field">
                <input id="inputNombreAl" class="new-item-form-control" type="text" />
            </span>
        </div>

        <div class="new-item-form-line">
            <span class="new-item-form-label">Apellidos:</span>
            <span class="new-item-form-field">
                <input id="inputApellidosAl" class="new-item-form-control" type="text" />
            </span>
        </div>
        
        <div class="new-item-form-line">
            <span class="new-item-form-label">DNI:</span>
            <span class="new-item-form-field">
                <input id="inputDNIAl" class="new-item-form-control" type="text" />
            </span>
        </div>
        
        <div class="new-item-form-line">
            <span class="new-item-form-label">Curso:</span>
            <span class="new-item-form-field">
                <input id="inputCursoAl" class="new-item-form-control" type="text" />
            </span>
        </div>
        <input type="button" onclick="guardar_alumno();" value="Guardar" style="display: block"/>
    </div>
    
    <div class="botones">
            <input type="button" onclick="nuevo_alumno();" value="Nuevo Alumno"/>
    </div>
    <div class="botones">
            <input type="button" onclick="nueva_tarea();" value="Nueva Tarea"/>
    </div>
</asp:Content>
