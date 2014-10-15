/* ========================================================================
 * ProtoMorph Fluid: Version 1.0.0
 * @protomorph (http://protomorph.tk/)
 * ========================================================================
 * Copyright 2014
 * Licensed GNU General Public License, version 2 (GPL-2.0)
 * ======================================================================== */

;(function ($, window, document, undefined) {
	"use strict";

	// OPTIONS
	// =======
	var options = {
		ease: 'easeInOutCirc',
		fade: 200,
		offset: 200,
		time: 600
	};

	// CUSTOM CHECKBOXES
	// =================
	$('[type="checkbox"]').wrap('<label class="checkbox-custom"></label>').after('<i class="checkbox-icon"></i>');

	// CUSTOM RADIO INPUTS
	// ===================
	$('[type="radio"]').wrap('<label class="radio-custom"></label>').after('<i class="radio-icon"></i>');

	// STICKY SEPERATOR
	// ================
	$('.forumbg:not(.recent-topics) .topiclist.topics').each(function() {
		$(this).find('.sticky').last().addClass('last');
	});

	// TO TOP SHOW
	// ===========
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > options.offset) {
			$('.scroll-to-top').stop(true, true).fadeIn(options.fade, options.ease);
		} else if ($(this).scrollTop() <= options.offset) {
			$('.scroll-to-top').stop(true, true).fadeOut(options.fade, options.ease);
		}
	});

	// TO TOP BUTTON.
	// ==============
	$('.scroll-to-top').bind('click touchstart', function() {
		$('html, body').animate({scrollTop: 0}, options.time, options.ease);
	});

	$('.icon_topic_latest').parent().removeAttr('title');

	// TOOLTIP.
	// ========
	$('[title]').tooltip({
		container: 'body',
		delay: {show: options.fade, hide: options.fade / 2}
	});

})(jQuery, window, document);
