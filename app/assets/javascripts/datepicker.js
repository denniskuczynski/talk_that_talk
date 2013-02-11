(function() {
  function datepicker_on_ready_handler() {
    $('.datepicker').datepicker();
  }

  $(document).ready(datepicker_on_ready_handler);
  $(document).bind('page:change', datepicker_on_ready_handler)
})();
