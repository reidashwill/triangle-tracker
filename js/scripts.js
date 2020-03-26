$(document).ready(function() {
  $("form#formGroupOne").submit(function(event) {
    event.preventDefault();
    var sideOne = $("input:radio[name=sideOne]:checked").val();
    var sideTwo = $("input:radio[name=sideTwo]:checked").val();
    var sideThree = $("input:radio[name=sideThree]:checked").val();
    if(sideOne === undefined || sideTwo === undefined || sideThree === undefined) {
    alert('This is not a triangle!');
    } else if(parseInt(sideOne) > parseInt(sideTwo) + parseInt(sideThree)) {
      alert('This is not a triangle');
    } else if(parseInt(sideTwo) > parseInt(sideOne) + parseInt(sideThree)) {
      alert('This is not a triangle');
    } else if(parseInt(sideThree) > parseInt(sideOne) + parseInt(sideTwo)) {
      alert('This is not a triangle');
    } else if(sideOne === sideTwo && sideOne === sideThree) {
      $('#isosolese').hide();
      $('#scalene').hide();
      $('#equilateral').show();
    } else if(sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
      $('#isosolese').show();
      $('#scalene').hide();
      $('#equilateral').hide();
    } else if(sideOne != sideTwo && sideOne != sideThree) {
      $('#isosolese').hide();
      $('#scalene').show();
      $('#equilateral').hide();
    }
    debugger;

  });
})