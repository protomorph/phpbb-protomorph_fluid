/* ========================================================================
 * ProtoMorph Fluid: Version 1.0.0
 * @protomorph (http://protomorph.cf/)
 * ========================================================================
 * Copyright 2015
 * Licensed GNU General Public License, version 2 (GPL-2.0)
 * ======================================================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');

	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));

	document.querySelector('head').appendChild(msViewportStyle);
}

;(function ($, window, document, undefined) {
	'use strict';

	// options
	var options = {
		ease: 'easeInOutCirc',
		external: true,			// Set to false if you don't want external links to open in a new tab/window.
		fade: 200,
		offset: 200,
		time: 600
	};

	// CUSTOM CHECKBOXES
	$('[type="checkbox"]').wrap('<label class="checkbox-custom"></label>')
		.after('<i class="checkbox-icon"></i>');
	// =================

	// CUSTOM RADIO INPUTS
	$('[type="radio"]').wrap('<label class="radio-custom"></label>')
		.after('<i class="radio-icon"></i>');
	// ===================

	// EXTERNAL LINKS
	if (options.external) $('a').filter(function () {
		return this.hostname && this.hostname !== location.hostname;
	}).addClass('external').prop({
		target: '_blank',
		rel: 'nofollow'
	});
	// ==============

	// HIGHLIGHT.JS
	hljs.configure({
		tabReplace: '	',
		useBR: true
	});

	$('.codebox code').each(function (i, block) {
		hljs.highlightBlock(block);
	});
	// ============

	// STICKY SEPERATOR
	$('.forumbg:not(.recent-topics) .topiclist.topics').each(function() {
		$(this).find('.global-announce')
			.last().addClass('last').end()
			.find('.announce')
			.last().addClass('last').end()
			.find('.sticky')
			.last().addClass('last');
	});
	// ================

	// TO TOP SHOW
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > options.offset) {
			$('.scroll-to-top').stop(true, true)
				.fadeIn(options.fade, options.ease);
		} else if ($(this).scrollTop() <= options.offset) {
			$('.scroll-to-top').stop(true, true)
				.fadeOut(options.fade, options.ease);
		}
	});
	// ===========

	// TO TOP BUTTON.
	$('.scroll-to-top').bind('click touchstart', function() {
		$('html, body').animate({scrollTop: 0},
			options.time,
			options.ease
		);
	});
	// ==============

	// REMOVE UN-NEEDED ATTRIBUTES
	$('.icon_topic_latest').parent().removeAttr('title');

	$('.dropdown .small-icon > a').removeAttr('title');

	$('.modtools-icon').text('');

	$('#qr_postform #message-box textarea').removeAttr('style');
	// ===========================

	// TOOLTIP.
	$('[title]').tooltip({
		container: 'body',
		delay: {
			show: options.fade,
			hide: options.fade / 2
		}
	});
	// ========

	// AUTO ADD YOUTUBE
	$('.postbody a').filter(function () {
		if (this.href.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/)/)) {
			var youtuberegex	= /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11,})(?:\S+)?$/,
				playlistregex	= /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?((v=[^&\s]*&list=[^&\s]*)|(list=[^&\s]*&v=[^&\s]*))(&[^&\s]*)*$/,
				ytplaylistregex	= /^(?:https?:\/\/)?(?:www\.)?youtube.*playlist\?list=([a-zA-Z0-9\-_]+)/,
				videourl		= $(this).attr('href');

			if (videourl.match(playlistregex) ||
				videourl.match(ytplaylistregex) ||
				videourl.match(youtuberegex)) {
				$(this).attr({
					'data-youtube-video': $(this).attr('href')
				});

				$(this).removeClass('external')
					.text('')
					.youtubeembed();

				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
	// ================

})(jQuery, window, document);
