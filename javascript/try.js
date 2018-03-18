$(function() {
	$("#navbar-example2 a").on('click', function(event) {
    if(window.location.indexOf('index') != -1 ){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var navBarHeight = document.getElementById('navbar-example2').clientHeight;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navBarHeight
                }, 1000, function(){
                // window.location.hash = hash;
            });
         }}
     });

    var projects = [
        {
            name: 'lala',
            imgs: ['project1', 'project2']
        },{
            name: 'project2',
            imgs: ['project2']
        },{
            name: 'project3',
            imgs: ['project1']
        },{
            name: 'project4',
            imgs: ['project1']
        },{
            name: 'project5',
            imgs: ['project1']
        },{
            name: 'project6',
            imgs: ['project1']
        }
    ];

    var string_row_begin = "<div class=\"row row-offcanvas\">";
    var string_row_end = "</div>";

    console.log(projects);

    var currentDiv;

    projects.forEach(function(p, i){
        if( ( i+1 ) % 2 != 0) {
            $currentDiv = $("<div/>")    
             .addClass("row")
             .addClass("row-offcanvas");
             //one row contains two collums
            $('#im-gallery').append($currentDiv);
            console.log(i);
        }
        

        var string_to_append = "";
        
        $half_block = $("<div/>")
            .addClass("img-c")
            .addClass("col-md-6")
            .attr( "id", function( arr ) {
                return i;
              })
            ;

        $img_w = $("<div/>")
            .addClass("img-w");
        
        $img_w.prepend($('<img>',{ /*id: i,class:"img-w",*/ src:"images/"+ p.imgs[0] + ".jpg", alt: ""}));
        
        $half_block.append($img_w);

        // string_to_append += "<div class=\"col-md-6 im-gallery-project\">";
        // string_to_append += "<img src=\"images/";
        // string_to_append += p.img;
        // string_to_append += ".jpg\">";
        // string_to_append += "<ul class=\"slider-navigation\">";
        // string_to_append += " <li><a href=\"#0\" class=\"prev inactive\">Next</a></li>";
        // string_to_append += "<li><a href=\"#0\" class=\"next\">Prev</a></li>";
        // string_to_append += "</ul>";
        // string_to_append += " <div id=\"im-close\" class=\"im-close\">Close</div>"
        string_to_append += "<div class=\"im-gallery-description\">"
        string_to_append += "<h2>"
        string_to_append += p.name;
        string_to_append += "</h2></div></div>";

        $half_block.append(string_to_append);
        $currentDiv.append($half_block);
    })

    $(".img-c").on("click", function() {
        // let w = $(this).outerWidth()
        // let h = $(this).outerHeight()
        // let x = $(this).offset().left
        // let y = $(this).offset().top

        var id = $(this).attr('id');
        console.log(id);

        projects[id].imgs.forEach(function(img, i){
            $temp_div = $("<div/>")
            .addClass("carousel-item");
            $temp_div.prepend($('<img>',{ /*id: i,*/class:"d-block im-gallery-img", src:"images/"+ img + ".jpg", alt: "project_img_" + i}));
            $("#im-gallery-carousel").append($temp_div);

            $("#im-gallery-single ol").append("<li data-target=\"#im-gallery-single\" data-slide-to=\""+ i +"\"></li>")

        })
        $(".carousel-item").first().addClass("active");
        $("#im-gallery-single ol li").first().addClass("active");
        $("#im-gallery-single").show(); 
    });

    // $("#im-gallery-single").on("click", function() {
    //     $("#im-gallery-carousel").empty();

    // })
      
})


