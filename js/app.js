var widget = function(src, dest) {
   var controller = new widget.Controller();
   var sourceView = new widget.SourceView(src, controller);
   controller.destination = new widget.DestView(dest);
};

widget.model = {
  convert: function(textInput) {
    return markdown.toHTML(textInput);
  }
};

widget.SourceView = function(selector, controller) {
  this.$inputElement = $(selector);
  this.controller = controller;

  this.$inputElement.on('keyup', function(event) {
    this.notifyTheController(this.$inputElement.val());
  }.bind(this));
};

widget.SourceView.prototype.notifyTheController = function(event) {
   this.controller.notifyKeyUp(event);
};

widget.DestView = function(selector) {
   this.$selector = $(selector);   
};

widget.DestView.prototype.produceOutput = function(markdown) {
  this.$selector.html(markdown);
};

widget.Controller = function() {
};

widget.Controller.prototype.notifyKeyUp = function(inputText) {
  var markdown = widget.model.convert(inputText);
  this.destination.produceOutput(markdown); 
};

$(document).ready(function(){
  widget("#source-id", "#preview-div");
});