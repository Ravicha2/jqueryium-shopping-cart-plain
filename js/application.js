var updateValue = function (ele) {
    var itemQ = parseFloat($(ele).find('.quantity input').val());
    var itemP = parseFloat($(ele).find('.Price input').val());
  
    var subValue = itemQ * itemP;
    $(ele).children('.ItemTotal').html(subValue);
  
    return subValue;
  }

  $(document).ready(function () {
    $('tbody tr').each(function (i, ele) {
      var marketValue = updateValue(ele);
    });
  });

  var sum = function (acc, x) { return acc + x; };
var updateTotal = function () {
    var Totalvalue = [];
    $('tbody tr').each(function(i, ele) {
        var newValue = updateValue(ele);
        Totalvalue.push(newValue);
    })
    var total = Totalvalue.reduce(sum);
  $('#Total').html(total)
}

$(document).ready(function () {
    updateTotal();
});