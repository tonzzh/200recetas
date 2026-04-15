/* Extracted Inline Scripts */

document.addEventListener('DOMContentLoaded', function () { jQuery(document).ready(function ($) { var delay = 100; setTimeout(function () { $('.elementor-tab-title').removeClass('elementor-active'); $('.elementor-tab-content').css('display', 'none'); }, delay); }); });

// Custom FAQ Accordion Functionality
									document.addEventListener('DOMContentLoaded', function () {
										// Wait a bit to ensure the page is fully loaded
										setTimeout(function () {
											const accordionHeaders = document.querySelectorAll('.eael-accordion-header');

											accordionHeaders.forEach(function (header) {
												header.addEventListener('click', function (e) {
													e.preventDefault();

													// Get the associated content
													const tabNumber = this.getAttribute('data-tab');
													const content = document.querySelector('[data-tab="' + tabNumber + '"].eael-accordion-content');

													// Check if this accordion is currently active
													const isActive = this.classList.contains('elementor-active');

													// Close all accordions
													document.querySelectorAll('.eael-accordion-header').forEach(function (h) {
														h.classList.remove('elementor-active');
													});
													document.querySelectorAll('.eael-accordion-content').forEach(function (c) {
														c.style.display = 'none';
													});

													// If it wasn't active, open this one
													if (!isActive) {
														this.classList.add('elementor-active');
														if (content) {
															content.style.display = 'block';
														}
													}
												});
											});

											// Ensure all content is hidden initially
											document.querySelectorAll('.eael-accordion-content').forEach(function (content) {
												content.style.display = 'none';
											});
										}, 200);
									});

// Posiciones disponibles: right-top, right-bottom, left-top, left-bottom, center-top, center-bottom, center-center
										var position = "left-bottom";

										// Colores disponibles: verde, azul, rojo, amarillo
										var color = "verde";

										// Animaciones disponibles: fade, zoom, from-right, from-left, from-top, from-bottom
										var animation = "from-left";

										// Nombre del producto que se mostrará
										var product_name = "Postres de La Abuela";

										// Frase que aparece después del nombre de la persona
										var phrase = "acaba de comprar";

										// Tiempo que el mensaje permanece visible (milisegundos)
										var timeout = 4000;

										// Tipo de nombre: masc, fem, any
										var type_name = "fem";
										var msg_final = "";

										// Tiempo mínimo y máximo entre notificaciones (segundos)
										var min_time = 4;
										var max_time = 20;

										// Nombres femeninos populares en América Latina
										var names_fem = [
											'María', 'Ana', 'Carolina', 'Sofía', 'Camila', 'Valentina', 'Fernanda', 'Daniela',
											'Gabriela', 'Lucía', 'Isabella', 'Andrea', 'Paula', 'Mariana', 'Alejandra',
											'Verónica', 'Claudia', 'Rocío', 'Lorena', 'Patricia', 'Catalina', 'Rosa',
											'Liliana', 'Mónica', 'Jimena', 'Estefanía', 'Florencia', 'Carla', 'Julieta', 'Natalia'
										];

										var option = {
											position: position,
											cssAnimationStyle: animation,
											plainText: false,
											timeout: timeout
										};

										function show_notification() {
											msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
											msg_final += " " + phrase + " <strong>" + product_name + "</strong>";

											if (color == "verde") {
												Notiflix.Notify.Success(msg_final, option);
											}

											if (color == "azul") {
												Notiflix.Notify.Info(msg_final, option);
											}

											if (color == "rojo") {
												Notiflix.Notify.Failure(msg_final, option);
											}

											if (color == "amarillo") {
												Notiflix.Notify.Warning(msg_final, option);
											}

											var rand = Math.floor(Math.random() * (max_time - min_time + 1) + min_time);
											setTimeout(show_notification, rand * 1000);
										}

										setTimeout(show_notification, 4 * 1000);

var $ = jQuery

										$(document).ready(function () {

											var h = []

											$('.sliding-text').each(function () {
												h.push($(this).find('.elementor-widget').clone().html())
											})

											function init() {
												$('.sliding-text').each(function (i) {

													var $this = $(this)

													$this.find('.elementor-widget').removeClass('sliding')

													var amount = Math.ceil($(window).width() / $(this).find('.elementor-widget-container').outerWidth(true)) + 1

													$this.find('.elementor-widget').empty().addClass('sliding')
													$this.find('.elementor-widget').html(h[i].repeat(amount))
												})
											}

											init()
											$(window).on('load resize', init)
										})

jQuery(document).ready(function ($) {
											$(document).on('countdown_expire', function () {

												Object.keys(localStorage)
													.filter(key => key.endsWith('evergreen_interval'))
													.forEach(key => localStorage
														.removeItem((key)))

												Object.keys(localStorage)
													.filter(key => key.endsWith('evergreen_due_date'))
													.forEach(key => localStorage
														.removeItem((key)))

											});
										});

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
					const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								let lazyloadBackground = entry.target;
								if (lazyloadBackground) {
									lazyloadBackground.classList.add('e-lazyloaded');
								}
								lazyloadBackgroundObserver.unobserve(entry.target);
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' });
					lazyloadBackgrounds.forEach((lazyloadBackground) => {
						lazyloadBackgroundObserver.observe(lazyloadBackground);
					});
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach((event) => {
					document.addEventListener(event, lazyloadRunObserver);
				});

var localize = { "ajaxurl": "", "nonce": "355bd47d1e", "i18n": { "added": "Adicionado ", "compare": "Comparar", "loading": "Carregando..." }, "eael_translate_text": { "required_text": "\u00e9 um campo obrigat\u00f3rio", "invalid_text": "Inv\u00e1lido", "billing_text": "Faturamento", "shipping_text": "Envio", "fg_mfp_counter_text": "de" }, "page_permalink": "", "cart_redirectition": "", "cart_page_url": "", "el_breakpoints": { "mobile": { "label": "Dispositivos m\u00f3veis no modo retrato", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": { "label": "Dispositivos m\u00f3veis no modo paisagem", "value": 880, "default_value": 880, "direction": "max", "is_enabled": false }, "tablet": { "label": "Tablet no modo retrato", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": { "label": "Tablet no modo paisagem", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": false }, "laptop": { "label": "Notebook", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": false }, "widescreen": { "label": "Tela ampla (widescreen)", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } } };

var EAELImageMaskingConfig = { "svg_dir_url": "" };

var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": { "shareOnFacebook": "Compartilhar no Facebook", "shareOnTwitter": "Compartilhar no Twitter", "pinIt": "Fixar", "download": "Baixar", "downloadImage": "Baixar imagem", "fullscreen": "Tela cheia", "zoom": "Zoom", "share": "Compartilhar", "playVideo": "Reproduzir v\u00eddeo", "previous": "Anterior", "next": "Pr\u00f3ximo", "close": "Fechar", "a11yCarouselPrevSlideMessage": "Slide anterior", "a11yCarouselNextSlideMessage": "Pr\u00f3ximo slide", "a11yCarouselFirstSlideMessage": "Este \u00e9 o primeiro slide", "a11yCarouselLastSlideMessage": "Este \u00e9 o \u00faltimo slide", "a11yCarouselPaginationBulletMessage": "Ir para o slide" }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": { "breakpoints": { "mobile": { "label": "Dispositivos m\u00f3veis no modo retrato", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": { "label": "Dispositivos m\u00f3veis no modo paisagem", "value": 880, "default_value": 880, "direction": "max", "is_enabled": false }, "tablet": { "label": "Tablet no modo retrato", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": { "label": "Tablet no modo paisagem", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": false }, "laptop": { "label": "Notebook", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": false }, "widescreen": { "label": "Tela ampla (widescreen)", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } }, "hasCustomBreakpoints": false }, "version": "3.33.5", "is_static": false, "experimentalFeatures": { "e_font_icon_svg": true, "additional_custom_breakpoints": true, "container": true, "e_optimized_markup": true, "theme_builder_v2": true, "hello-theme-header-footer": true, "e_pro_free_trial_popup": true, "nested-elements": true, "home_screen": true, "global_classes_should_enforce_capabilities": true, "e_variables": true, "cloud-library": true, "e_opt_in_v4_page": true, "import-export-customization": true, "mega-menu": true }, "urls": { "assets": "", "ajaxurl": "", "uploadUrl": "" }, "nonces": { "floatingButtonsClickTracking": "21e9a87699" }, "swiperClass": "swiper", "settings": { "page": [], "editorPreferences": [] }, "kit": { "active_breakpoints": ["viewport_mobile", "viewport_tablet"], "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description", "hello_header_logo_type": "title", "hello_footer_logo_type": "logo" }, "post": { "id": 9, "title": "Recetascero%20%E2%80%93%20recetassaludablesfit.site", "excerpt": "", "featuredImage": false } };

document.addEventListener('DOMContentLoaded', function () { wp.i18n.setLocaleData({ 'text direction\u0004ltr': ['ltr'] }); });

var ElementorProFrontendConfig = { "ajaxurl": "", "nonce": "b166dcf08d", "urls": { "assets": "", "rest": "" }, "settings": { "lazy_load_background_images": true }, "popup": { "hasPopUps": false }, "shareButtonsNetworks": { "facebook": { "title": "Facebook", "has_counter": true }, "twitter": { "title": "Twitter" }, "linkedin": { "title": "LinkedIn", "has_counter": true }, "pinterest": { "title": "Pinterest", "has_counter": true }, "reddit": { "title": "Reddit", "has_counter": true }, "vk": { "title": "VK", "has_counter": true }, "odnoklassniki": { "title": "OK", "has_counter": true }, "tumblr": { "title": "Tumblr" }, "digg": { "title": "Digg" }, "skype": { "title": "Skype" }, "stumbleupon": { "title": "StumbleUpon", "has_counter": true }, "mix": { "title": "Mix" }, "telegram": { "title": "Telegram" }, "pocket": { "title": "Pocket", "has_counter": true }, "xing": { "title": "XING", "has_counter": true }, "whatsapp": { "title": "WhatsApp" }, "email": { "title": "Email" }, "print": { "title": "Print" }, "x-twitter": { "title": "X" }, "threads": { "title": "Threads" } }, "facebook_sdk": { "lang": "pt_BR", "app_id": "" }, "lottie": { "defaultAnimationUrl": "" } };

document.addEventListener('DOMContentLoaded', () => {
					// Get today's date
					const today = new Date();
					const day = String(today.getDate()).padStart(2, '0');
					const month = String(today.getMonth() + 1).padStart(2, '0');
					const dateString = `${day}/${month}`;

					// IDs to update
					const ids = ['8bab920', '8cc770a'];

					ids.forEach(id => {
						const wrapper = document.querySelector(`[data-id="${id}"]`);
						if (wrapper) {
							// Find text content that matches ID/Date pattern and replace
							// We access innerHTML to respect existing emoji/formatting
							wrapper.innerHTML = wrapper.innerHTML.replace(/\d{2}\/\d{2}/g, dateString);
						}
					});
				});

