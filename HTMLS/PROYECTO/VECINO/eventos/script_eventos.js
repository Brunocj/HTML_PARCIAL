document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".btn");

  // Función para resaltar el botón seleccionado
    function highlightButton(selectedButton) {
    links.forEach(function(link) {
      link.classList.remove("btn-selected");
    });
    selectedButton.classList.add("btn-selected");
    }

  // Añadir evento de clic a cada botón
    links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Evitar la acción predeterminada del enlace
      var selectedButton = this;
      highlightButton(selectedButton);

      // Redirigir a la página correspondiente después de un breve retraso para que se muestre el resaltado
      setTimeout(function() {
        window.location.href = selectedButton.href;
      }, 100);
    });
  });

  // Resaltar el botón según la página actual
  var currentPage = window.location.pathname.split("/").pop();
  var currentButton = document.querySelector('a[href="' + currentPage + '"]');
  if (currentButton) {
    highlightButton(currentButton);
  }
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const eventId = card.dataset.eventId;
        window.location.href = `detalles.html?eventId=${eventId}`;
    });
});


$(document).ready(function(){
  // Número de eventos por página
  var eventsPerPage = 8;

  // Función para activar/desactivar botones de navegación
  function toggleNavigationButtons() {
    var currentPage = parseInt($(".page-item.active .page-link").data("page"));
    var totalPages = Math.ceil($(".cardEvent").length / eventsPerPage);
    $("#previousPage").toggleClass("disabled", currentPage === 1);
    $("#nextPage").toggleClass("disabled", currentPage === totalPages);

    // Ocultar todos los eventos
    $(".cardEvent").hide();

    // Calcular el índice de inicio y fin de los eventos a mostrar en la página actual
    var startIndex = (currentPage - 1) * eventsPerPage;
    var endIndex = Math.min(startIndex + eventsPerPage, $(".cardEvent").length);

    // Mostrar los eventos que pertenecen a la página actual
    $(".cardEvent").slice(startIndex, endIndex).show();
  }

  // Inicializar la paginación y mostrar los eventos de la primera página
  $(".page-item:first-child .page-link").addClass("active");
  toggleNavigationButtons();

  // Manejar clics en botones de página
  $(".page-button").click(function(){
    // Quita la clase active de todos los elementos
    $(".page-item").removeClass("active");
    // Agrega la clase active solo al elemento clickeado
    $(this).parent().addClass("active");
    toggleNavigationButtons();
  });

  // Manejar clics en botón "Anterior"
  $("#previousPage").click(function() {
    if (!$(this).hasClass("disabled")) {
      var currentPage = parseInt($(".page-item.active .page-link").data("page"));
      $(".page-item.active").prev().find(".page-link").click();
    }
  });

  // Manejar clics en botón "Siguiente"
  $("#nextPage").click(function() {
    if (!$(this).hasClass("disabled")) {
      var currentPage = parseInt($(".page-item.active .page-link").data("page"));
      $(".page-item.active").next().find(".page-link").click();
    }
  });
});
  function mostrarPopupCerrarSesion() {
    Swal.fire({
        title: 'Cerrar sesión',
        text: '¿Estás seguro de que deseas cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00913f',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "../../LOGIN/login.html"; //Cambiar la ubicacion del login de acuerdo a lo necesario
        }
    });
}