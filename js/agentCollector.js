(function($){
    var agentCollector = function(){
        var resourceList = [],
            fetchMount = 0;
        
        var init = function(){
            
        }
        
        var fetch = function(list){
            $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?', 
                function(data){
                    $.each(data.items, function(i, item){
                        $("<li />").append($("<a />").attr({'src':item.media.m,'target':'_blank'}).append($("<img class='thumbnail' />").attr('src',item.media.m).css('width','125px'))).appendTo('#work ul');
                        if( i == 5 ) return false;
                    });
            });
        }
    }
})(jQuery);