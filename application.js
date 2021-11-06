import navbar from '/components/navbar.js';
import footer from '/components/footer.js';
import home from '/components/home.js';
import resume from '/components/resume.js';
import blog from '/components/blog.js';
import contact from '/components/contact.js';

import envelope from '/components/svgs/envelope.js';

$( document ).ready(function() {
  var application = new Vue({
    el: "#application",
    data: {
      page: window.location.hash ? window.location.hash.substring(1) : 'home'
    },
    mounted(){
      feather.replace()
    }
  });
});
