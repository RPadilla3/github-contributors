(function() {
    'use strict';

    window.contribs = window.contribs || {};
    window.contribs.searchRepos = searchRepos;


      /**
       * @param {String} text query search of Repos
       * @param {String} token User token required for search
       * @return {Promise} [description]
       */
      function searchRepos(text, token) {

        $.ajax({
          url: 'https://api.github.com/search/repositories?q=',
          method: 'GET',
          dataType: 'json',
          headers: {
            'Authorization': 'token: ' + token,
            'content-type': 'application/json'

          }
        });
      }



}());
