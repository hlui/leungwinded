$("./body") {
  remove("./*")
  
  add_class("mw_home")
  insert("div", class: "mw_header") {
    insert("div", class: "mw_img") {
      insert("img", src: asset("images/robot.png"))
    }
    insert("div", "Welcome to Leung Winded", class: "mw_title")
    insert("div", class: "mw_img") {
      insert("img", src: asset("images/robot.png"))
    }
  }
  inject('<a class="twitter-timeline" href="https://twitter.com/leungwinded" data-widget-id="296866717756424192">Tweets by @leungwinded</a>')
  inject('<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>')
  
  insert("div", "140 characters isn't very leung winded. Oh the irony.", class: "mw_footer")
  insert("div", class: "mw_counter") {
    inject('<!-- Counter Code START --><a href="http://www.e-zeeinternet.com/" target="_blank"><img src="http://www.e-zeeinternet.com/count.php?page=919868&style=LED_g&nbdigits=5" alt="Free Counter" border="0" ></a><br><a href="http://www.e-zeeinternet.com/" title="Free Counter" target="_blank" style="font-family: Geneva, Arial, Helvetica, sans-serif; font-size: 10px; color: #000000; text-decoration: none;">Free Counter</a><!-- Counter Code END -->')
  }
}