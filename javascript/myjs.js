function initNav(){

    //init Nav
    $("#navbar-example2 a").on('click', function(event) {
        $('.nav-active').removeClass('nav-active');
        $(this).parent().addClass('nav-active');
        scroll(this);
     });

    $("#im-intro-text-row a").on('click', function(event) {
        scroll(this);
    });
}

function scroll(el){
    if(window.location.href.indexOf('index') != -1 ){
        if (el && el.hash !== "") {
            event.preventDefault();
            var hash = el.hash;
            var navBarHeight = document.getElementById('navbar-example2').clientHeight;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navBarHeight
                }, 1000, function() {
                    window.location.hash = '';
                });
        }else{
            if (window.location.hash !== "") {
                // event.preventDefault();
                var hash = window.location.hash;
                window.location.hash = '';
                 
                setTimeout(function(){
                  var navBarHeight = document.getElementById('navbar-example2').clientHeight;
               
                  $('html, body').animate({
                    scrollTop: $(hash).offset().top - navBarHeight
                    }, 1000, function() {
                   
                  });
                }, 500);
            }            
        }
        
    }
}

function initProjects() {
    var projects = [
        {
            name: 'Denewood',
            imgs: ['Denewood_1', 'Denewood_2', 'Denewood_3', 'Denewood_4', 'Denewood_5', 'Denewood_6', 'Denewood_7', 'Denewood_8', 'Denewood_9', 'Denewood_10', 'Denewood_11']
        },{
            name: 'Wadham Gardens',
            imgs: ['Wadham_1', 'Wadham_2', 'Wadham_3', 'Wadham_4', 'Wadham_5', 'Wadham_6', 'Wadham_7']
        },{
            name: 'Cavendish Place',
            imgs: ['Cavendish_1', 'Cavendish_2', 'Cavendish_3','Cavendish_4', 'Cavendish_5', 'Cavendish_6', 'Cavendish_7', 'Cavendish_8']
        },{
            name: 'Bramham Garden',
            imgs: ['Braham_1', 'Braham_2', 'Braham_3', 'Braham_4', 'Braham_5']
        },{
            name: 'Chantry House',
            imgs: ['Chantry_1', 'Chantry_2', 'Chantry_3', 'Chantry_4', 'Chantry_5', 'Chantry_6', 'Chantry_7', 'Chantry_8', 'Chantry_9', 'Chantry_10']
        },{
            name: 'De Vere Garden',
            imgs: ['De_Vere_1', 'De_Vere_2', 'De_Vere_3', 'De_Vere_4', 'De_Vere_5', 'De_Vere_6', 'De_Vere_7', 'De_Vere_8', 'De_Vere_9', 'De_Vere_10', 'De_Vere_11', 'De_Vere_12', 'De_Vere_13', 'De_Vere_15']
        },{
            name: 'Eaton Place',
            imgs: ['Eaton_1', 'Eaton_2', 'Eaton_4', 'Eaton_5', 'Eaton_6', 'Eaton_7', 'Eaton_8']
        },{
            name: 'Red Brick House',
            imgs: ['Red_1', 'Red_2', 'Red_3', 'Red_4', 'Red_5', 'Red_6', 'Red_7', 'Red_8', 'Red_9']
        },{
            name: 'Ridgefield',
            imgs: ['Ridgefield_1', 'Ridgefield_2', 'Ridgefield_3', 'Ridgefield_4', 'Ridgefield_5', 'Ridgefield_6', 'Ridgefield_7', 'Ridgefield_8', 'Ridgefield_9', 'Ridgefield_10', 'Ridgefield_11', 'Ridgefield_12', 'Ridgefield_13', 'Ridgefield_14', 'Ridgefield_15', 'Ridgefield_16']
        },{
            name: 'South Audley',
            imgs: ['Audley_1', 'Audley_2', 'Audley_3', 'Audley_4']
        }
    ];


    two_columns_row_init(projects, "projects")

    $(".img-c").on("click", function() {
        var id = $(this).attr('id');
        // console.log(id);

        projects[id].imgs.forEach(function(img, i){
            $temp_div = $("<div/>")
            .addClass("carousel-item");

            $folderName = projects[id].name.replace(/ /g,"_");
            // console.log(": " + $folderName);
           //src: images/thisProjectName/img.jpg 
            $temp_div.prepend($('<img>',{ /*id: i,*/class:"d-block im-gallery-img", src:"images/"+ $folderName +"/" + img + ".jpg", alt: "project_img_" + i}));
            $("#im-gallery-carousel").append($temp_div);

            $("#im-gallery-single ol").append("<li data-target=\"#im-gallery-single\" data-slide-to=\""+ i +"\"></li>")

        })
        $(".carousel-item").first().addClass("active");
        $("#im-gallery-single ol li").first().addClass("active");
        setTimeout(function(){$("#im-gallery-single").show()}, 100); 
    });

    $("#im-gallery-close").on("click", function() {
        $("#im-gallery-carousel").empty();
        $("#im-gallery-single ol").empty();
        $("#im-gallery-single").hide();
    })
}

function initStock() {
    $url = "javascript/stock.json";
    //receive the data from stock.json
    $.getJSON($url)
      .done(function( json ) {
            //done
        $categories = json.categories;
        $products = json.products;
        //initialise the category page
        two_columns_row_init($products, "stock-category");
        $(".img-c").on("click", function() {
            var id = $(this).attr('id');
            // console.log(id);

            $products[id].imgs.forEach(function(img, i){
                $temp_div = $("<div/>")
                .addClass("carousel-item");

                $folderName = $products[id].name.replace(/ /g,"_");
                console.log(": " + $folderName);
               //src: images/thisProjectName/img.jpg 
                $temp_div.prepend($('<img>',{ /*id: i,*/class:"d-block im-gallery-img", src:"images/"+ $folderName +"/" + img + ".jpg", alt: "product_img_" + i}));
                $("#im-gallery-carousel").append($temp_div);

                $("#im-gallery-single ol").append("<li data-target=\"#im-gallery-single\" data-slide-to=\""+ i +"\"></li>")

            })
            $(".carousel-item").first().addClass("active");
            $("#im-gallery-single ol li").first().addClass("active");
            setTimeout(function(){$("#im-gallery-single").show()}, 100); 
        });

        $("#im-gallery-close").on("click", function() {
            $("#im-gallery-carousel").empty();
            $("#im-gallery-single ol").empty();
            $("#im-gallery-single").hide();
        })

      })
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
}

function two_columns_row_init($custom_array, $div_id){
    var currentDiv;
    var mainDiv = $('#im-' + $div_id);
    $custom_array.forEach(function(p, i){
        //one row only has two columns, so i+1 % 2, add row div
        if( ( i+1 ) % 2 != 0) {
            currentDiv = $("<div/>")    
             .addClass("row")
             .addClass("row-offcanvas");
             //one row contains two collums
            mainDiv.append(currentDiv);
            // console.log(i);
        }
        

        var string_to_append = "";
        
        //add one column
        $half_block = $("<div/>")
            .addClass("img-c")
            .addClass("col-md-6")
            .attr( "id", function( arr ) {
                return i;
              })
            ;

        $img_w = $("<div/>")
            .addClass("img-w");
        
        $folderName = p.name.replace(/ /g, "_");
        $img_w.prepend($('<img>',{ /*id: i,class:"img-w",*/ src:"images/"+ $folderName +"/" + p.imgs[0] + ".jpg", alt: ""}));
        
        $half_block.append($img_w);

        $description_block = $("<div/>")
            .addClass("im-gallery-description")


        string_to_append += "<h2>";
        string_to_append += p.name;
        string_to_append += "</h2>";

        if(p.descriptions!=null){
            var descriptions = p.descriptions[0];
            for (var itemName in descriptions) {
                string_to_append += "<p>";
                string_to_append += itemName + ": " + descriptions[itemName];
                string_to_append += "</p>";
            }
        }        

        $description_block.append(string_to_append);
        $half_block.append($description_block);
        currentDiv.append($half_block);
    });

}


