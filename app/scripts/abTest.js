if (Math.random() > 0.5) {
  $('#introduction').css('order', 1);
  $('#column').css('order', 2);
  $('#team').css('order', 3);
  $('#sponsor').css('order', 4);
  $('#fbFanPage').css('order', 5);
  $('#footer').css('order', 6);
} else {
  $('#column').css('order', 1);
  $('#introduction').css('order', 2);
  $('#team').css('order', 3);
  $('#sponsor').css('order', 4);
  $('#fbFanPage').css('order', 5);
  $('#footer').css('order', 6);
}
