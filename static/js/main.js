$(document).ready(function () {
  $('form').submit(function() {
    event.preventDefault(); //prevent form submit
    $('.loading').removeClass('hide');
    $('form #amazon_url').prop('disabled', true);
    $('form #amazon_url').css('opacity', .5);
    
    $.post('/', { 'url' : $('#amazon_url').val()}, 
    function(returnedData){
      let return_data = JSON.parse(returnedData);
      $('.loading').addClass('hide');
      $('form #amazon_url').prop('disabled', false);
      $('form').css('opacity', 1);
      $('form #amazon_url').val('');
      $('#resultModal .result-name').html(return_data['name']);
      $('#resultModal .result-price').html(return_data['price']);
      $('#resultModal').modal();
    }).fail(function(){
      console.log("error");
    });

    return false;
  })
});