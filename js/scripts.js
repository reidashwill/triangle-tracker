$(document).ready(function() {
  $("form#formGroupOne").submit(function(event) {
    event.preventDefault();
    var sideOne = $("input:radio[name=sideOne]:checked").val();
    var sideTwo = $("input:radio[name=sideTwo]:checked").val();
    var sideThree = $("input:radio[name=sideThree]:checked").val();
    if(sideOne === sideTwo && sideOne === sideThree) {
      $('#isosolese').hide();
      $('#scalene').hide();
      $('#equilateral').show();
    } else if(sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
      $('#isosolese').show();
      $('#scalene').hide();
      $('#equilateral').hide();
    // } else if() {
    //   $('#isosolese').hide();
    //   $('#scalene').hide();
    //   $('#equilateral').hide();
    // } else {
    //   alert('This is not a triangle!');
    // }
    debugger
  });
})