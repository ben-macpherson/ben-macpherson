export default Vue.component('foot', {
	template: `
<div class="fixed-bottom d-flex align-items-end px-md-5 px-2 py-md-5 py-2">
	<div class="d-flex flex-column w-auto">
		<a class="footer-social-button mb-2 text-black" href="https://www.linkedin.com/in/ben-macp" target="_blank"><i data-feather="linkedin" class="bm-icon"></i></a>
		<a class="footer-social-button mb-2 text-black" href="https://instagram.com/ben.macp" target="_blank"><i data-feather="instagram" class="bm-icon"></i></a>
		<a class="footer-social-button mb-2 text-black" href="https://twitter.com/ben_macp" target="_blank"><i data-feather="twitter" class="bm-icon"></i></a>
		<a class="footer-social-button text-black" href="https://github.com/ben-macpherson" target="_blank"><i data-feather="github" class="bm-icon"></i></a>
	</div>
	<p class="ms-auto text-uppercase text-end m-0 copyright">
		© 2021 Ben MacPherson<br>
		All rights reserved
	</p>
</div>
	`
});
