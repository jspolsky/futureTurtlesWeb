/*
	Polymorph by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'center'
		});

	// Banners.
		$('#banner > article')
			.css('cursor', 'pointer')
			.on('click', 'a', function(event) {
				event.stopPropagation();
			})
			.on('click', function(event) {

				event.preventDefault();
				event.stopPropagation();

				var $a = $(this).find('a');

				if ($a.length > 0)
					window.location.href = $a.attr('href');

			})
			.each(function() {

				var $this = $(this),
					$img = $this.children('img'),
					x;

				// Assign image.
					$this.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$this.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Off-Canvas Navigation.

		// Navigation Panel Toggle.
			$('<a href="#navPanel" class="navPanelToggle">Menu</a>')
				.appendTo($header);

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

})(jQuery);