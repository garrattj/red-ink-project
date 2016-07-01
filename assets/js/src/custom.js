// Custom javascript for Redink

// Tabs underlined js
$(document).ready(function() {

	var widget = $('.tabs-underline');

	var tabs = widget.find('ul a'),
		content = widget.find('.tabs-content-placeholder > div');

	tabs.on('click', function (e) {

		e.preventDefault();

		// Get the data-index attribute, and show the matching content div

		var index = $(this).data('index');

		tabs.removeClass('tab-active');
		content.removeClass('tab-content-active');

		$(this).addClass('tab-active');
		content.eq(index).addClass('tab-content-active');

	});

});
