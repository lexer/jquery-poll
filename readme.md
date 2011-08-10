Jquery YQL query plugin

Example:

    $(function(){
      $.yql('select * from geo.places where text="Orlando"', function(response){
        console.log(response);
      })
    });
