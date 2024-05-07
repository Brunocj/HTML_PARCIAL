const notificationBadge = document.getElementById('notification-count');
const notificationMessage = document.getElementById('notification-message');

// Mostrar el mensaje al pasar el mouse sobre la notificación
notificationBadge.addEventListener('mouseenter', () => {
  notificationMessage.style.display = 'block';
});

// Ocultar el mensaje al quitar el mouse de la notificación
notificationBadge.addEventListener('mouseleave', () => {
  notificationMessage.style.display = 'none';
});