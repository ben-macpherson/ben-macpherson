export default Vue.component('navbar', {
  props: ['page'],
  data: function() {
    return {
      dot_offsets: {home: null, resume: null, blog: null},
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
    setTimeout(function(){ this.setOffsets(); }.bind(this), 250);
  },
  template: `

<nav class="navbar navbar-expand-md fixed-top py-md-4 navbar-light bg-transparent">
  <div class="container-fluid px-md-5">
    <a class="navbar-brand" href="#home">
      <img src="name.png" alt="logo" style="width: 150px">
    </a>
    <button class="btn border-0 p-0 text-black border-none text-end navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navbar">
      <span data-feather="menu"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <transition-group name="navdot">
        <div id="navdot" class="d-none" :style="{ left: dot_left + 'px' }" :class="{ 'd-md-block' : dot_left }" key="navdot">
          <i data-feather="circle"></i>
        </div>
      </transition-group>
      <ul class="navbar-nav flex-grow-1 justify-content-center align-items-end mb-2 mb-md-0 text-uppercase">
        <li class="nav-item text-center p-md-2">
          <a class="nav-link active" href="#home" @click="$emit('update:page', 'home')">Home</a>
        </li>
        <li class="d-md-none nav-item p-md-2">
          <a class="nav-link" href="#contact" @click="$emit('update:page', 'contact')">Contact</a>
        </li>
        <li class="nav-item p-md-2">
          <a class="nav-link" href="#resume" @click="$emit('update:page', 'resume')">Resume</a>
        </li>
        <li class="nav-item p-md-2">
          <a class="nav-link" href="#blog" @click="$emit('update:page', 'blog')">Blog</a>
        </li>
        <li class="nav-item p-md-2 dropdown text-end">
          <a class="nav-link text-nowrap" id="project-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects <i data-feather="chevron-down" style="width: 16px; height: 16px;"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-md-start" aria-labelledby="project-dropdown">
            <li><a class="dropdown-item pointer text-md-start text-end" href="#css-studio" @click="$emit('update:page', 'css-studio')">CSS Studio</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-md-flex d-none justify-content-md-end" style="min-width: 150px;">
        <a class="btn btn-outline-dark" href="#contact">Contact</a>
      </div>
    </div>
  </div>
</nav>

  `
});
