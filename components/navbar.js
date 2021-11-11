export default Vue.component('navbar', {
  props: ['page'],
  data: function() {
    return {
      dot_offsets: {home: null, resume: null, blog: null},
      offsets_calculated: false,
    }
  },
  watch: {
    dot_left: function(newPostition, oldPosition) {
      if(oldPosition == null && newPostition != null){
        feather.replace();
      }
    }
  },
  methods: {
    setOffsets: function() {
      Object.keys(this.dot_offsets).forEach(function(key) {
        console.log('key', key);
        let li = $("nav.navbar ul.navbar-nav li.nav-item a[href='#" + key + "']:visible")
        if(li){
          this.$set(this.dot_offsets, key, li.offset().left + li.width()/2 + 4)
        }
      }, this);
    }
  },
  computed: {
    dot_left: function() {
      if(Object.keys(this.dot_offsets).includes(this.page)){
        return this.dot_offsets[this.page];
      } else {
        return null;
      }
    }
  },
  created(){
      window.addEventListener('resize', this.setOffsets);
  },
  destroyed(){
      window.removeEventListener('resize', this.setOffsets);
  },
  mounted(){
    setTimeout(function(){ this.setOffsets(); }.bind(this), 50);
  },
  template: `

<nav class="navbar navbar-expand-md fixed-top py-md-4 navbar-light bg-transparent">
  <div class="container-fluid px-md-5">
    <a class="navbar-brand" href="#home">
      <img src="assets/name.png" alt="logo" style="width: 150px">
    </a>
    <button class="btn border-0 p-0 text-black border-none text-end navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navbar">
      <span data-feather="menu"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <transition-group name="navdot">
        <div id="navdot" class="d-none d-md-block" :style="{ left: dot_left + 'px' }" key="navdot" v-if="dot_left"> 
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"/>
          </svg>
        </div>
      </transition-group>
      <ul class="navbar-nav flex-grow-1 justify-content-center align-items-end mb-2 mb-md-0 text-uppercase">
        <li class="nav-item text-center p-md-2">
          <a class="nav-link" :class="{ 'active' : page == 'home' }" href="">Home</a>
        </li>
        <li class="d-md-none nav-item p-md-2">
          <a class="nav-link" :class="{ 'active' : page == 'contact' }" onclick="$('#contact').modal('show')">Contact</a>
        </li>
        <li class="nav-item p-md-2">
          <a class="nav-link" :class="{ 'active' : page == 'about' }" href="about">About</a>
        </li>
        <li class="nav-item p-md-2">
          <a class="nav-link" :class="{ 'active' : page == 'skills' }" href="skills">Skills</a>
        </li>
        <li class="nav-item p-md-2">
          <a class="nav-link" :class="{ 'active' : page == 'musings' }" href="musings">Musings</a>
        </li>
        <li class="nav-item p-md-2 dropdown text-end">
          <a class="nav-link text-nowrap" id="project-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Portfolio <i data-feather="chevron-down" style="width: 16px; height: 16px;"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-md-start" aria-labelledby="project-dropdown">  
            <li><a class="dropdown-item pointer text-md-start text-end" href="portfolio/css-studio">CSS Studio</a></li>
            <li><a class="dropdown-item pointer text-md-start text-end" href="portfolio/bodo-health">Bodo Health</a></li>
            <li><a class="dropdown-item pointer text-md-start text-end" href="portfolio/bodo-studio">Bodo Studio</a></li>
            <li><a class="dropdown-item pointer text-md-start text-end" href="portfolio/geofilter-studio">Geofilter Studio CRM</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-md-flex d-none justify-content-md-end" style="min-width: 150px;">
        <a class="btn btn-outline-dark px-3" onclick="$('#contact').modal('show')">Contact</a>
      </div>
    </div>
  </div>
</nav>

  `
});
