(function() {
    'use strict';

    window.contribs = window.contribs || {};


    $('#search')
        .on('submit', function repos(event) {
            event.preventDefault();

            var token = $('.api').val();
            var query = $('.query').val();

            window.contribs.searchRepos(query, token)

            .then(function handleSuccess(data) {
                    console.log('success', data);

                    var randomRepo = data.items;
                    var randomChoice = randomRepo[Math.ceil(Math.random() * randomRepo.length)];
                    var url = randomChoice.commits_url;

                    var p = window.contribs.getRepo(token, url);

                    return p;
                })
                .then(function handlegetCommit(data) {
                    var randomCommit = data.author;
                    console.log(randomCommit);
                  console.log('success', data);
                })
                .fail(function handleSuccess(xhr) {
                    console.log('failure', xhr);
                });
        });




}());
