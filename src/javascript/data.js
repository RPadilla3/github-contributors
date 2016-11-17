(function() {
    'use strict';

    window.contribs = window.contribs || {};
    window.contribs.searchRepos = searchRepos;


      /**
       * @param {String} query search of Repos
       * @param {String} token User token required for search
       * @return {Promise} [description]
       */
      function searchRepos(query, token) {

       return $.ajax({
          url: 'https://api.github.com/search/repositories?q=' + query,
          method: 'GET',
          dataType: 'json',
          headers: {
            authorization: 'token ' + token,
          }
        });

      };



}());
