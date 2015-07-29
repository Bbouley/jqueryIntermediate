// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var $heading = $('#first-heading');
  console.log($heading);

  $heading.append('<h3>Testing</h3>');

  var test = $('.container p').first();
  var test2 = $('p:eq(3)').append('&nbsp;&nbsp;<span>appending</span>');
  var testClone = $heading.clone();
  console.log(testClone);

  var testClone2 = $('#delegate').clone();
  console.log(testClone2);

  $("#main-btn").on('click', function(){
    console.log('hello, is it me you\'re looking for?');
    $heading.append('<h3>Blah Blah Blah</h3>');
    console.log(this);
  });

});
