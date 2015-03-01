// Model

function hideousMarkdownWidget(input, preview){

  for (var i = 0; i < arguments.length; i++) {
   arguments[i] = $( arguments[i] );
  };

  input.keyup(function () {
    preview.html(markdown.toHTML(input.val()));
  });



 }

// Better:

function markdownWidget(input, preview) {

  $( input ).keyup(function () {
    $( preview ).html(
      markdown.toHTML(
        $( input ).val()
      )
    );
  });

};

// Controller


$( document ).ready(function () {

  markdownWidget("#markdown", "#preview");

})
