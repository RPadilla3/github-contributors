(function() {
    'use strict';

    window.contribs = window.contribs || {};

    var users = [];
    var storedUser = JSON.parse(localStorage.getItem('users')) || [];
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

                    users.push(storeUser);
                    console.log(users);

                    localStorage.setItem('users', JSON.stringify(users));

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
