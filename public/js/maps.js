(function ($) {
	"use strict";
	if (window.google) {
		var maps = [],
		styles = [];
		google.maps.event.addDomListener(window, "load", init)
	}
	$(document).on("click", ".more-info", function () {
		ga("send", "event", "Details Link", "More Info")
	}).on("click", ".style-name a", function () {
		ga("send", "event", "Details Link", "Style Name")
	});
	function init() {
		var r = {
			zoom : 11,
			scrollwheel : !1,
			navigationControl : !1,
			mapTypeControl : !1,
			scaleControl : !1,
			streetViewControl : !1,
			center : new google.maps.LatLng(40.67, -73.94),
			mapTypeControlOptions : {
				mapTypeIds : [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		},
		n = 0,
		i = function () {
			var u = styles[n],
			e = $("#map-" + u.id).get(0),
			t = new google.maps.Map(e, r),
			f;
			n > 0 && (t.bindTo("center", maps[0]), t.bindTo("zoom", maps[0])),
			google.maps.event.addListenerOnce(t, "bounds_changed", function () {
				n++,
				n < styles.length && i()
			}),
			f = new google.maps.StyledMapType(u.json, {
					name : u.name
				}),
			t.mapTypes.set("map_style", f),
			t.setMapTypeId("map_style"),
			maps.push(t)
		},
		t;
		i(),
		google.maps.event.addListener(maps[0], "bounds_changed", function () {})
	}
	$(document).on("change", "select", function () {
		window.location = $.url(($(this).closest(".list-sort").data("list-url") || "explore") + "?" + $("select").serialize()).toLowerCase()
	});
	$(document).on("click", ".favorite-style", function () {
		var n = $(this),
		i = n.closest(".preview-details"),
		t = "Sorry, looks like something went wrong when favoriting this style. Please refresh the page and try again.";
		$.ajax({
			method : "GET",
			url : $(this).data("fav-url"),
			error : function () {
				notify.error(t)
			},
			success : function (r) {
				r && r.success || notify.error(t),
				$(".fav-amount", i).text(r.newFavsCount),
				r.favorited ? n.addClass("is-favorite").find("i").removeClass().addClass("icon-star") : n.removeClass("is-favorite").find("i").removeClass().addClass("icon-star-empty")
			}
		})
	})
	styles.push({
		id : 1,
		name : 'Athlete!',
		json : [{
				"featureType" : "landscape",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "transit",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "poi",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "water",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.icon",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"stylers" : [{
						"hue" : "#00aaff"
					}, {
						"saturation" : -100
					}, {
						"gamma" : 2.15
					}, {
						"lightness" : 12
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.text.fill",
				"stylers" : [{
						"visibility" : "on"
					}, {
						"lightness" : 24
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "geometry",
				"stylers" : [{
						"lightness" : 57
					}
				]
			}
		]
	});
	styles.push({
		id : 2,
		name : 'Athlete!',
		json : [{
				"featureType" : "landscape",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "transit",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "poi",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "water",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.icon",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"stylers" : [{
						"hue" : "#00aaff"
					}, {
						"saturation" : -100
					}, {
						"gamma" : 2.15
					}, {
						"lightness" : 12
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.text.fill",
				"stylers" : [{
						"visibility" : "on"
					}, {
						"lightness" : 24
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "geometry",
				"stylers" : [{
						"lightness" : 57
					}
				]
			}
		]
	});
	styles.push({
		id : 3,
		name : 'Athlete!',
		json : [{
				"featureType" : "landscape",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "transit",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "poi",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "water",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.icon",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"stylers" : [{
						"hue" : "#00aaff"
					}, {
						"saturation" : -100
					}, {
						"gamma" : 2.15
					}, {
						"lightness" : 12
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.text.fill",
				"stylers" : [{
						"visibility" : "on"
					}, {
						"lightness" : 24
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "geometry",
				"stylers" : [{
						"lightness" : 57
					}
				]
			}
		]
	});
	styles.push({
		id : 4,
		name : 'Athlete!',
		json : [{
				"featureType" : "landscape",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "transit",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "poi",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "water",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.icon",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"stylers" : [{
						"hue" : "#00aaff"
					}, {
						"saturation" : -100
					}, {
						"gamma" : 2.15
					}, {
						"lightness" : 12
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.text.fill",
				"stylers" : [{
						"visibility" : "on"
					}, {
						"lightness" : 24
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "geometry",
				"stylers" : [{
						"lightness" : 57
					}
				]
			}
		]
	});
	styles.push({
		id : 5,
		name : 'Athlete!',
		json : [{
				"featureType" : "landscape",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "transit",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "poi",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "water",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.icon",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"stylers" : [{
						"hue" : "#00aaff"
					}, {
						"saturation" : -100
					}, {
						"gamma" : 2.15
					}, {
						"lightness" : 12
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.text.fill",
				"stylers" : [{
						"visibility" : "on"
					}, {
						"lightness" : 24
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "geometry",
				"stylers" : [{
						"lightness" : 57
					}
				]
			}
		]
	});
	styles.push({
		id : 6,
		name : 'Athlete!',
		json : [{
				"featureType" : "landscape",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "transit",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "poi",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "water",
				"elementType" : "labels",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.icon",
				"stylers" : [{
						"visibility" : "off"
					}
				]
			}, {
				"stylers" : [{
						"hue" : "#00aaff"
					}, {
						"saturation" : -100
					}, {
						"gamma" : 2.15
					}, {
						"lightness" : 12
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "labels.text.fill",
				"stylers" : [{
						"visibility" : "on"
					}, {
						"lightness" : 24
					}
				]
			}, {
				"featureType" : "road",
				"elementType" : "geometry",
				"stylers" : [{
						"lightness" : 57
					}
				]
			}
		]
	});
})(jQuery);
