(function() {
  'use strict';
  window.contribs = window.contribs || {};

  var expect = chai.expect;

  describe('searchRepos Ajax call Test', function(){
    it('should know searchRepos is a name space', function(){
      var token = '07c7f235949093289a29ecc9bb326545065f767b';
      var result = window.contribs.searchRepos(token, 'cat');
      console.log(result);
        expect(result).to.be.an('object');

    });

  });


}());
