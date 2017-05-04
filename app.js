$(document).ready(function() {
    getQuote();

	$('#get-quote').on('click', function(event) {
		event.preventDefault();	
        getQuote();	
	});
});

function getQuote() {
$.ajax({url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
            var post = data.shift(); 
            $('#quote-title').text(post.title);
            $('#quote-content').html(post.content);
            var twitText = "https://twitter.com/intent/tweet?text=" + 
                           $('#quote-content').text() + " - " + 
                           $('#quote-title').text();
            twitText = twitText.replace(/ /g, "%20");
            $(".twitter-share-button").attr("href", twitText);
        },
        cache: false
       });
}
