var updateValue = function (ele) {
    var itemQ = parseFloat($(ele).find('.quantity input').val());
    var itemP = parseFloat($(ele).find('.Price input').val());
  
    // market value is shares times market price per share
    var subValue = itemQ * itemP;
    $(ele).children('.ItemTotal').html(subValue);
  
    return subValue;
  }

  $(document).ready(function () {
    $('tbody tr').each(function (i, ele) {
      var marketValue = updateValue(ele);
    });
  });