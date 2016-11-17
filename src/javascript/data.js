(function() {
    'use strict';

    window.contribs = window.contribs || {};
    window.contribs.searchRepos = searchRepos;


      /**
       * @param {String}
       * @return {Promise} [description]
       */
      function searchRepos(text) {
        var userToken = $('#api-key').val();

        $.ajax({
          url: 'https://api.github.com/search/repositories?q=',
          method: 'GET',
          dataType: 'json',
          headers: {
            'Authorization': 'token' + userToken,
            'content-type': 'application/json'

          }
        });
      }



}());
