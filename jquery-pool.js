(function($) {
  function Poller(fn, wait){
    this.wait = wait;
    this.fn = fn;
  };

  Poller.prototype.stop = function() {
    window.clearTimeout(this.timeout);
  };

  Poller.prototype.next = function() {
    var self = this;
    this.timeout = window.setTimeout(function(){
	self.fn(self);
    }, this.wait);
  };
  
  $.poll = function(fn, wait){
    var poller = new Poller(fn, wait);   
    fn(poller);
    return poller;
  };

})(jQuery);
