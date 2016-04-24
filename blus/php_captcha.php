
<?php
      $originalkey = substr($_SESSION['originalkey'],0,5);  //session of captcha
      $captcha = $_REQUEST['captchacode'];
      if($captcha!=$originalkey){
        print_error("<b> Captcha does not match, Go back and try again.</b>");
      }
?>