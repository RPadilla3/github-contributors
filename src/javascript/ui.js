(function() {
    'use strict';

    window.contribs = window.contribs || {};

      $('#search')
        .on('submit', function repos(event){
          event.preventDefault();
          var userToken = $('#api-key').val();

          window.contribs.searchRepos('rofifi', userToken)
            .done(function handleSuccess(data) {
              console.log('success', data);
            })
            .fail(function handleSuccess(xhr) {
              console.log('failure', xhr);
            })
        });




}());
