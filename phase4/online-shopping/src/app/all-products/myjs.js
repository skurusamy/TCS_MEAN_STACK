$('#productModal').on('click', function (event) {
  e.preventDefault();
  $(this).closest('tr').find('#p').modal({
    keyboard: true
}, 'show');
return false;
  })