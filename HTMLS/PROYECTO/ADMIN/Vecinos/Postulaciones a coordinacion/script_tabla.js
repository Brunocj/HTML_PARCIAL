function Cancelar() {
  window.location.href = "tabla_serenazgo.html";
  return false;
}

function Confirmacion() {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "El proceso no podrá ser reversible",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#00913f",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, registrar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Registrado!",
        text: "El personal ha sido registrado con éxito",
        icon: "success",
      }).then(() => {
        window.location.href = "tabla_serenazgo.html";
      });
    }
  });

  // Evitar que el formulario se envíe automáticamente
  return false;
}

function Eliminacion() {
  Swal.fire({
    title: "Estás seguro?",
    text: "Una vez eliminado, la información asociada al personal será permanentemente eliminada del sistema",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#00913f",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado!",
        text: "El personal ha sido eliminado con éxito",
        icon: "success",
      }).then(() => {
        window.location.href = "tabla_serenazgo.html";
      });
    }
  });

  // Evitar que el formulario se envíe automáticamente
  return false;
}

$(document).ready(function () {
  var table = $("#miTabla").DataTable({
    pageLength: 5,
    lengthChange: false,
    language: {
      emptyTable: "No hay registros disponibles",
      zeroRecords: "No se encontraron registros coincidentes",
      infoEmpty: "Aún no se ingresan entradas a las tabla",
      paginate: {
        first: "Primero",
        last: "Último",
        next: "Siguiente",
        previous: "Anterior",
      },
      info: "Mostrando de _START_ a _END_ de _TOTAL_ entradas",
      search: "Buscar:", // Cambia "Search" por "Buscar"
    },
  });
  $("#filtroEstado").on("change", function () {
    var estado = $(this).val();
    table.column(2).search(estado).draw();
  });
  $("#limpiarFiltros").on("click", function () {
    $("#filtroEstado").val("");
    table.search("").columns().search("").draw();
  });

  // Evento de cambio de filtro de turno
  $("#filtroEstado").on("change", function () {
    var estado = $(this).val();
    table.column(2).search(estado).draw();

    // Actualizar el contador después de filtrar
    actualizarContador();
  });

  // Evento de limpiar filtros
  $("#limpiarFiltros").on("click", function () {
    $("#filtroEstado").val("");
    table.search("").columns().search("").draw();

    // Actualizar el contador después de limpiar los filtros
    actualizarContador();
  });
});

$(window).on("load", function () {
  function actualizarContador() {
    var contadorMañana = 0;
    var contadorTarde = 0;
    var contadorNoche = 0;

    // Contar personas por turno
    $("#miTabla tbody tr").each(function () {
      var turno = $(this).find("td:eq(2)").text().trim();
      if (turno === "Mañana") {
        contadorMañana++;
      } else if (turno === "Tarde") {
        contadorTarde++;
      } else if (turno === "Noche") {
        contadorNoche++;
      }
    });

    // Actualizar el contenido del contador
    $("#contadorTurnos").text(
      "Personal por turno: Mañana " +
        contadorMañana +
        ", Tarde " +
        contadorTarde +
        ", Noche " +
        contadorNoche
    );
  }

  // Llamar a la función para actualizar el contador después de que la página se haya cargado completamente
  actualizarContador();
});

function actualizarCamposCorreo(opcion) {
  var asuntoInput = document.getElementById("asunto");
  var cuerpoInput = document.getElementById("cuerpo");

  if (opcion.id === "aprobar") {
    asuntoInput.value =
      "SOLICITUD ACEPTADA - Cambio de rol exitoso (Administración- San Miguel)";
    cuerpoInput.value =
      "Estimado [Nombre del Usuario].\nNos complace informarle que su solicitud para ser coordinador ha sido aceptada. Agradecemos sinceramente su compromiso con mejorar la experiencia de los vecinos de esta plataforma.\nPara comenzar, aquí está su contraseña temporal para acceder a la página.\nContraseña temporal: X35&%1*DS\nRecuerde que es importante mantener esta contraseña segura y cambiarla después de iniciar sesión una vez cambiado su rol dentro del sistema.";
  } else if (opcion.id === "denegar") {
    asuntoInput.value =
      "SOLICITUD DENEGADA - No puedes ser coordinador(a)  (Administración- San Miguel)";
    cuerpoInput.value =
      "Estimado [Nombre del Usuario].\nLamentamos informarle que su solicitud ha sido denegada.\nDebido a que [motivo]";
  }
}

function Cancelar() {
  window.location.href = "tabla_serenazgo.html";
  return false;
}

function Actualizar() {
  Swal.fire({
    title: "Estás seguro?",
    text: "El proceso no podrá ser reversible",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#00913f",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, actualizar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Actualizado!",
        text: "El personal ha sido actualizado con exito",
        icon: "success",
      }).then(() => {
        window.location.href = "tabla_serenazgo.html";
      });
    }
  });

  // Evitar que el formulario se envíe automáticamente
  return false;
}
