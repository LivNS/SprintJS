//alerta para o usuário abrir o app e ver o novo caminho gerado após algum perigo ser detectado

const notificationButton = document.getElementById('notificationButton');

notificationButton.addEventListener('click', function() {
  alert('PERIGO REPORTADO À 7KM DA SUA LOCALIZAÇÃO!!! ENTRE NO APP PARA VERIFICAR O NOVO TRAJETO!!!');
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

  document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    
    alert("Seu report foi enviado com sucesso!! Agradecemos pela colaboração!!!");
  });
