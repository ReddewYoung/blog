$("a[href='#top']").click(function () {
  $('html,body').animate({ scrollTop: 0 }, "slow");
  return false;
});
$(document.links).filter(function() {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');