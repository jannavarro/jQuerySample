$(document).ready(function() {
  $('.btnPanel').on('click', function() {
    var content = "My new Awesome Content";
    var panelId = $(this).attr('data-panelid');
    $(panelId).toggle();
    $(panelId + ' .panel-body').html(content);
  });
});

