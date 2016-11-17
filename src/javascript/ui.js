(function() {
    'use strict';

    window.contribs = window.contribs || {};

      $('#search')
        .on('submit', function repos(event){
          event.preventDefault();

          var api = $('#api-key').val();
          console.log(api);

          var search = $('#query').val();
          console.log(search);
          // window.contribs.searchRepos('jhgjhghj')
          //   .done(function handleSuccess(data) {


            // })
        });

      // };


}());
