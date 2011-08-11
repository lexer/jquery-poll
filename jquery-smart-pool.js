(function($) {
  function Poller(wait, fn){
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
  
  $.poll = function(wait, fn){
    var poller = new Poller(wait, fn);   
    fn(poller);
    return poller;
  };

})(jQuery);
