jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({ until: new Date(2020, 9, 31, 23) }); // year, month, date, hour
  });
});
