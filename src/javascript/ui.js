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

                    var randomRepo = data.items;
                    var randomChoice = randomRepo[Math.ceil(Math.random() * randomRepo.length)];
                    var url = randomChoice.commits_url;
                    var p = window.contribs.getCommit(token, url);

                    return p;
                })
                .then(function handlePromise(data) {
                    var avatar = data[0].author.avatar_url;
                    var author = data[0].commit.author.name;

                    var stored = JSON.parse(localStorage.getItem('users'));
                    if (stored === null) {
                      stored = [];
                    }

                    var storeUser = {
                        url: avatar,
                        name: author
                    };

                    stored.push(storeUser);

                    localStorage.setItem('users', JSON.stringify(stored));

                    console.log(stored);


                    console.log(storeUser);

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
