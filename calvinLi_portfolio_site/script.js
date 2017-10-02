var os = new OnScreen();

os.on('enter', '#bar1', function(element, event){
    element.style.width = '70%';
})
os.on('enter', '#bar2', function(element, event){
    element.style.width = '87%';
})
os.on('enter', '#bar3', function(element, event){
    element.style.width = '84%';
})


var hashTagActive = "";
    $(".scroll").on("click touchstart" , function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 1500, 'swing');
            hashTagActive = this.hash;
        }
    });
