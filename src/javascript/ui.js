(function() {
    'use strict';

    window.contribs = window.contribs || {};

    $('#search')
        .on('submit', function repos(event) {
            event.preventDefault();

            var token = $('.api').val();
            console.log(token);
            var query = $('.query').val();
            console.log(query);


            window.contribs.searchRepos(query, token)

            .done(function handleSuccess(data) {
                    console.log('success', data);

                    var randomRepo = data.items;

                    var randomChoice = randomRepo[Math.ceil(Math.random() * randomRepo.length)];
                    console.log(randomChoice);
                })
                .fail(function handleSuccess(xhr) {
                    console.log('failure', xhr);
                })
        });




}());
