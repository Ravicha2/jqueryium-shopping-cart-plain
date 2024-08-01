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
    var total = Totalvalue.reduce(sum,0);
  $('#Total').html(total)
}

$(document).ready(function () {
    updateTotal();
});

$(document).ready(function () {
    updateTotal()
    $(document).on('click', ".btn.remove", function (event) {
        $(this).closest('tr').remove();
        updateTotal();
    });

    $('tr input').on('input', function () {
        updateTotal();
    });

    $('#addItem').on('submit', function (event) {
    
    event.preventDefault();
    var item =  $(this).children('[name = Item]').val();
    var quantity = $(this).children('[name = quantity]').val();
    var price = $(this).children('[name = Price]').val();
    console.log(item);
    $('tbody').append('<tr>'+
        '<td class="Item">' +item+ '</td>'+
        '<td class="quantity"><input type="number" value="' +quantity+ '" /></td>'+
        '<td class="Price"><input type="number" value="' +price+ '" /></td>'+
        '<td class="ItemTotal"></td>'+
        '<td><button class="btn btn-light btn-sm remove">remove</button></td>'+
    '</tr>');

    updateTotal();
    $('this').children('[name = Item]').val('');
    $('this').children('[name = quantity]').val('');
    $('this').children('[name = Price]').val('');
    });

});

