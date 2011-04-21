/*
 * jTwitter 1.1 - Tumblr API abstraction plugin for jQuery
 *
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
(function($){
  $.extend({
    jTumblr : function(username, numPosts, fnk){
      if(numPosts == 'undefined'){
        fnk = numPosts;
        numPosts = 5;
      }
      var url = "http://"+ username +".tumblr.com/api/read/json?callback=?";
      var info = {};
      $.getJSON(url, function(data){
        if(typeof fnk == 'function') fnk.call(this, data);
      });
    }
  });
})(jQuery);