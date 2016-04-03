'use strict';

// Venues controller
angular.module('venues').controller('VenuesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Venues', 'Cities', 'VenuesByCity', 'HelperService', '$timeout',
    function($scope, $stateParams, $location, Authentication, Venues, Cities, VenuesByCity, HelperService, $timeout) {
        $scope.authentication = Authentication;

        $scope.city = $stateParams.city


        $scope.findCities = function() {
            console.log('called made!');
            $scope.cities = Cities.query();
            console.log($scope.cities);
        };

        // Find a list of Venues
        // $scope.find = function () {
        //   $scope.venues = Venues.query();
        // };

        $scope.findVenueByCity = function() {
            VenuesByCity.search({
                'city': $stateParams.city
            }, function(venues) {
                console.log('Logging ' + venues.length + ' venues.');
                $scope.venues = venues;
            });
        };

        // Find existing Venue
        $scope.findOne = function() {
            $scope.venue = Venues.get({
                venueId: $stateParams.venueId
            });
        };

        $timeout(function() {

            // jQuery Banner Index
            var slider = new MasterSlider();

            $(function() {
                $('.quickview').on('click', function(e) {
                    $.fn.custombox(this);
                    var owl = $("#owl-demo");
                    owl.owlCarousel({
                        items: 5,
                        itemsDesktop: [1000, 5],
                        itemsDesktopSmall: [900, 3],
                        itemsTablet: [600, 2],
                        itemsMobile: false,
                        pagination: false
                    });
                    $(".next").click(function() {
                        owl.trigger('owl.next');
                    })
                    $(".prev").click(function() {
                        owl.trigger('owl.prev');
                    })
                    e.preventDefault();
                });
            });

            $('#price-filter').slider({
                range: true,
                min: 0,
                max: 999,
                values: [100, 700],
                slide: function(event, ui) {
                    $('#price-filter-value-1').text(ui.values[0]);
                    $('#price-filter-value-2').text(ui.values[1]);
                    var min = ui.values[0] / 999 * 90;
                    var max = ui.values[1] / 999 * 90;
                    $('.min-filter').css('left', min + '%');
                    $('.max-filter').css('left', max + '%');
                }
            });

            function increaseQty(id) {
                var qtya = $('.qty-' + id).val();
                var qtyb = qtya * 1 + 1;
                $('.qty-' + id).val(qtyb);
            }

            function decreaseQty(id) {
                var qtya = $('.qty-' + id).val();
                var qtyb = qtya * 1 - 1;
                if (qtyb < 1) {
                    qtyb = 1;
                }
                $('.qty-' + id).val(qtyb);
            }
        }, 3000);

    }
]).filter('capitalize', function() {
    return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : '';
    };
});
