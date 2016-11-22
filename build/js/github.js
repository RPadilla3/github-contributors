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

    /**
     * @param  {String} token User token required for search
     * @param  {String} url   url with user sent query to look for a commit
     * @return {Promise}
     */
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
(function() {
    'use strict';

    window.contribs = window.contribs || {};
    var stored = [];
    console.log(stored);

    var storedUser = JSON.parse(localStorage.getItem('users'));
    console.log(storedUser);

    storedUser.forEach(function(item) {
        $('#contributors ul')
            .append(
                '<li><img src="' + item.url + '">' + ' ' + item.name + '</li>'
            );
    });

    $('#search')
        .on('submit', function repos(event) {
            event.preventDefault();

            var token = $('.api').val();
            var query = $('.query').val();

            window.contribs.searchRepos(query, token)

            .then(function handleSuccess(data) {

                    var randomRepo = data.items;
                    var randomChoice = randomRepo[Math.ceil(Math.random() * randomRepo.length)];
                    var url = randomChoice.commits_url;
                    var p = window.contribs.getCommit(token, url);

                    return p;
                })
                .then(function handlePromise(data) {
                    var avatar = data[0].author.avatar_url;
                    var author = data[0].commit.author.name;

                    var storeUser = {
                        url: avatar,
                        name: author
                    };

                    stored.push(storeUser);
                    console.log(stored);

                    localStorage.setItem('users', JSON.stringify(stored));

                    $('#contributors ul')
                        .append(
                            '<li><img src="' + avatar + '">' + ' ' + author + '</li>'
                        );

                })
                .fail(function handleSuccess(xhr) {
                    console.log('failure', xhr);
                });
        });





}());
