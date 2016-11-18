(function() {
    'use strict';

    window.contribs = window.contribs || {};
    window.contribs.searchRepos = searchRepos;
    window.contribs.getCommit = getCommit;


      /**
       * @param {String} query search of Repos
       * @param {String} token User token required for search
       * @return {Promise} 
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

      }

      function getCommit(token, url) {
        return $.ajax({
          url: url.split('{')[0],
          method: 'GET',
          dataType: 'json',
          headers: {
            authorization: 'token ' + token
          }
        });
      }



}());
