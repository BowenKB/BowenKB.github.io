<?php require_once( 'couch/cms.php' ); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
    
        <title>Blu's Froyo</title>
        <link type="text/css" rel="stylesheet" href="css/content.css" >
        <link type="text/css" rel="stylesheet" href="css/main.css" >
        <link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    
    </head>
    
    <body>
   
<!-- SCROLL FEED SCRIPT ------------------------------------------------------------------------------------ -->
        
        <script>
        
            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
                var height = $(window).height();
                $('.textLogo').css({
                    'opacity': ((height - scrollTop) / height)
                    });
                });
        
        </script>

<!-- FB FEED SCRIPT ------------------------------------------------------------------------------------ -->
        
        <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1717454978497041',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

<!-- NAV HIGHLIGHT SCRIPT ------------------------------------------------------------------------------------ -->
        
        <script>

			 $(function(){

				$("#sidebar .navLink").on('click', function(){

					$("#sidebar .navLink").removeClass('active');

					$(this).addClass('active');

					return false;

				});
			});
            
            $(function(){

				$("#homeLink").on('click', function(){

					$("#sidebar .navLink").removeClass('active');

					return false;

				});
			});

		</script>
        
<!-- TAB SWITCH SCRIPT ------------------------------------------------------------------------------------ -->
        
        <script>
        
        $(function () {
            $("#homeLink").click(function () {
        
                $("content").removeClass('current');
                
                $("#home").addClass('current');
                
                $("sidebar .background").css("background-image", "url('files/images/front1.jpg')");
		
            })
		
		});
            
        $(function () {
            $("#happeningsLink").click(function () {
        
                $("content").removeClass('current');
                
                $("#happenings").addClass('current');
                
                $("sidebar .background").css("background-image", "url('files/images/candy2.jpg')");
		
            })
		
		});
            
        $(function () {
            $("#aboutLink").click(function () {
        
                $("content").removeClass('current');
                
                $("#about").addClass('current');
                
                $("sidebar .background").css("background-image", "url('files/images/cream1.jpg')");
		
            })
		
		});
            
        $(function () {
            $("#productsLink").click(function () {
        
                $("content").removeClass('current');
                
                $("#products").addClass('current');
                
                $("sidebar .background").css("background-image", "url('files/images/candy1.jpg')");
		
            })
		
		});
            
        $(function () {
            $("#contactLink").click(function () {
        
                $("content").removeClass('current');
                
                $("#contact").addClass('current');
                
                $("sidebar .background").css("background-image", "url('files/images/store3.jpg')");
            })
		
		});
            
        </script>
        
<!-- END SCRIPTS --------------------------------------------------------------------------------------------- -->
    
        <sidebar id="sidebar">
            
            <div class="background"></div>
            
            <div class="colorOverlay"></div>
        
            <a id="homeLink" title="Home"><div class="logo"></div></a>
            
            <a id="happeningsLink" class="navLink" title="Happenings">Happenings</a>
            <a id="aboutLink" title="About" class="navLink">About</a>
            <a id="productsLink" title="Products" class="navLink">Products</a>
            <a id="contactLink" title="Contact" class="navLink">Contact</a>
        
        </sidebar>

<!-- HOME SECTION --------------------------------------------------------------------------------------------- -->
        
        <content id="home">
        
            <p class="articleTitle">Home</p>
            <p class="subTitle">Who We Are</p>
            
            <p class="articleText">
            
                We at Blu's aim to offer a fun, comfortable environment for people of all ages, where you can come
                and enjoy a variety of snacks and treats!
            
            </p>
            
            <p class="subTitle">Pick - Weigh - Pay</p>
            
            <p class="articleText">
            
                
            
            </p>
        
        </content>

<!-- HAPPENINGS SECTION --------------------------------------------------------------------------------------------- -->
        
        <content id="happenings">
        
            <p class="articleTitle">Happenings</p>
            
        
        </content>
   
<!-- ABOUT SECTION --------------------------------------------------------------------------------------------- -->
        
        <content id="about">
            
            <div class="container">
            
            <img class="textLogo" src="files/images/textlogo.png"/>
            
            <p class="articleTitle">About</p>
            <p class="subTitle">Who We Are</p>
            
            <p class="articleText">
            
                At Blu's Froyo Shop, we aim to offer premium frozen yogurt and quality deserts you'll feel good about eating and
                enjoy in a cool, fun and friendly environment.
            
            </p>
            
            <p class="subTitle">Why We're Here</p>
            
            <p class="articleText">
            
                We at Blu's want to help Evansville grow as a community and make it an even better place to raise a family and live.
                We want to offer food that otherwise isn't available within Evansville, and to bring back life to the historic
                downtown district. We want to provide a safe, fun environment for people of all ages to come and hang out and
                enjoy gourmet treats!
            
            </p>
                
            <p class="subTitle">Locations</p>
                
            <div id="map"></div>
    
                <script>
      
                    function initMap() {
        
                        var mapDiv = document.getElementById('map');
                        var map = new google.maps.Map(mapDiv, {
                        center: {lat: 42.78, lng: -89.298},
                        zoom: 5
                        });
                    }
                
                </script>
        
                <script src="https://maps.googleapis.com/maps/api/js?callback=initMap" async defer></script>
                
            </div>
        
        </content>
            
<!-- PRODUCTS SECTION --------------------------------------------------------------------------------------------- -->
        
        <content id="products">
            
            <div class="container">
        
            <p class="articleTitle">Products</p>
            
            <hr />
            
            <p class="articleText">We at Blu's Froyo offer a variety of gourmet desert and drink options to satisfy anyones
                                   sweet tooth!</p>
            
           
            <div class="productBlock" id="left">
            
                <img class="cone" src="files/icons/choco.svg" />
                <p class="gridTitle">Froyo</p>
                
                <cms:editable name='Froyo_content' type='richtext'>
                <p class="list">Chocolate, Salted Caramel, Avocado, Pomegranate, Vanilla, Mint Chocolate Chip, Cookies & Cream</p>
                </cms:editable>
                    
            </div>
            
            <div class="productBlock" id="right">
            
                <img class="cone" src="files/icons/orange.svg" />
                <p class="gridTitle">Sorbet</p>
                
                <cms:editable name='Sorbet_content' type='richtext'>
                <p class="list">Orange Sorbet, Watermelon Sorbet</p>
                </cms:editable>
            
            </div>
            
            <div class="productBlock" id="left">
            
                <img class="cone" src="files/icons/raspberry.svg" />
                <p class="gridTitle">Gelato</p>
                
                <cms:editable name='Gelato_content' type='richtext'>
                <p class="list">Raspberry Gelato</p>
                </cms:editable>
            
            </div>
            
             <div class="productBlock" id="right">
            
                <img class="cone" src="files/icons/cherry.svg" />
                <p class="gridTitle">Soda - Provided by Tractor Cola</p>
                
                <cms:editable name='Soda_content' type='richtext'>
                <p class="list">Tractor Cola, Coconut, Root Beer, Lemon Grass, Ginger Beer, Cucumber, Cherry Cream, Blood Orange</p>
                </cms:editable>
                     
            </div>
                
                
             <div class="productBlock" id="left">
            
                <img class="cone" src="files/icons/cac.svg" />
                <p class="gridTitle">Candy & Toppings</p>
                
                <cms:editable name='Candy_content' type='richtext'>
                <p class="list">Tractor Cola, Coconut, Root Beer, Lemon Grass, Ginger Beer, Cucumber, Cherry Cream, Blood Orange</p>
                </cms:editable>
                
            </div>

            </div>
        
        </content>
        
<!-- CONTACT SCRIPT --------------------------------------------------------------------------------------------- -->
        
        <content id="contact">
        
            <p class="articleTitle">Contact</p>
            
            <form action="submit.php" method="post" name="form1">
                
                <input type="text" name="name" value="" placeholder="Your Name" /> <br />

                <input type="text" name="email" value="" Placeholder="Your E-mail"/> <br />     
    
                <textarea name="message" cols="30" rows="6" placeholder="Your Message"></textarea> <br />
    
                <img src="php_captcha.php" />
    
                <input name="captcha" type="text" id="captcha" size="15" placeholder="Captcha" /> <br />
                
                <div class="buttonContainer">
                
                <input type="submit" name="submit" value="Submit" />
                <input type="reset" name="reset" value="clear"/>
                    
                </div>
            
            </form>
        
        </content>
        
    </body>

</html>

<?php COUCH::invoke(); ?>