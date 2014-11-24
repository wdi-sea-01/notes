$(function(){

    var colors = ['red','blue','green','orange','purple','yellow','teal'];

    var ballAction = function (event) {
        var thisColor = colors[Math.floor(Math.random() * colors.length)];
        var dir = Math.random() > 0.49 ? '+' : '-';
        $(this)
            .clone()
            .appendTo('#content')
            .animate({
                'left':dir+'='+(Math.random() * 300),
                'top':dir+'='+(Math.random() * 300),
                },500)
            .css('background-color',thisColor);

    }
    
    $('#content').on('click', '.ball', ballAction);

});