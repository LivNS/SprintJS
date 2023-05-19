//alerta para o usuário abrir o app e ver o novo caminho gerado após algum perigo ser detectado

const notificationButton = document.getElementById('notificationButton');

notificationButton.addEventListener('click', function() {
  alert('PERIGO PRÓXIMO!!! ENTRE NO APP PARA VERIFICAR O NOVO TRAJETO!!!');
});

$(function() {
    $('#reporte').click(function() {
      $('#reportForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#reportForm");
  
      if (!container.is(e.target) 
          && container.has(e.target).length === 0) 
      {
          container.fadeOut();
      }
    });
    
  });

