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
}