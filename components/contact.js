export default Vue.component('contact', {
	mounted(){

    $(".floating-input-label input, .floating-input-label textarea").focus(function() {
      $(this).parent().addClass('active content')
    })

   $(".floating-input-label input, .floating-input-label textarea").focusout(function() {
      $(this).parent().removeClass('active');
      if(!$(this).val()) $(this).parent().removeClass('content');
    })

  },
  template: `

<div class="modal fade" tabindex="-1" id="contact">
  <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg">
    <div class="modal-content">
      <div class="modal-header justify-content-end align-items-end">
        <i data-feather="x" class="close pointer" data-bs-dismiss="modal"></i>
      </div>
      <div class="modal-name">
        <h3 class="w-100 text-center m-0">Lets talk.</h3>
      </div>
      <div class="row m-0">
      	<div class="col d-flex flex-column pe-lg-3 pe-0 ps-0">
          <div class="modal-body d-flex flex-column pe-lg-0">
            <div class="floating-input-label mb-3">
              <label for="classic-contact-name">Name</label>
              <input type="text" email="name" id="classic-contact-name">
            </div>
            <div class="floating-input-label mb-3">
              <label for="classic-contact-email">Email / Phone</label>
              <input type="email" name="email" id="classic-contact-email">
            </div>
            <div class="floating-input-label h-100">
              <label for="classic-contact-email">Message</label>
              <textarea name="message" id="class-contact-message" rows="5" style="resize: none"></textarea>
            </div>
          </div>
          <div class="modal-footer justify-content-center mt-auto pb-5 pb-lg-0 pe-lg-0">
            <button type="button" class="btn btn-link bm-link" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary px-5">Send</button>
          </div>
      	</div>
        <div class="col-lg-6 d-lg-flex d-none text-center ps-3 pe-0 flex-column">
          <div class="modal-body d-flex ps-0 flex-column justify-content-between">
            <envelope :height="'60%'" class="position-relative"></envelope>
            <div class="card mt-3" style="border-color: var(--alabaster)">
              <div class="card-body">
                <div class="text-start" style="color: var(--feldgrau)">
                  <i data-feather="map-pin" style="height: 14px; color: var(--ash-gray)" class="me-2"></i><span>Winnipeg, CA</span><br>
                  <i data-feather="phone"   style="height: 14px; color: var(--ash-gray)" class="me-2"></i><a class="bm-link" href="tel:12042267347">+1 (204) 226-7347</a><br>
                  <i data-feather="mail"    style="height: 14px; color: var(--ash-gray)" class="me-2"></i><a class="bm-link" href="mailto:ben@benmacpherson.dev">ben@benmacpherson.dev</a>
                </div>
              </div>
            </div>
                
          </div>
          <div class="modal-footer ps-0 justify-content-center mt-auto pb-lg-0">
            <a class="btn btn-outline-primary btn-round mx-1" href="https://www.linkedin.com/in/ben-macp" target="_blank"><i data-feather="linkedin" class="bm-icon" style="height: 25px;"></i></a>
            <a class="btn btn-outline-primary btn-round mx-1" href="https://instagram.com/ben.macp" target="_blank"><i data-feather="instagram" class="bm-icon" style="height: 25px;"></i></a>
            <a class="btn btn-outline-primary btn-round mx-1" href="https://twitter.com/ben_macp" target="_blank"><i data-feather="twitter" class="bm-icon" style="height: 25px;"></i></a>
          </div>
        </div>
      </div>
      <div class="modal-footer p-0 p-lg-4"></div>
    </div>
  </div>
</div>
	`
});
