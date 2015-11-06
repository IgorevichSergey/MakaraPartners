angular.module('googleMap', [

])
    .controller('googleMamController', function(){
        var
            initialize = function () {
                var mapProp = {
                        center:new google.maps.LatLng(49.977483, 18.950546),
                        zoom:15,
                        mapTypeId:google.maps.MapTypeId.ROADMAP
                    },
                    map = new google.maps.Map(document.getElementById("map"), mapProp);
                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(49.977483, 18.950546),
                    animation: google.maps.Animation.DROP
                });
            },
            ready = function(){
                setTimeout(initialize, 1000);
            };
        $(document).ready(ready);
        $(document).on('page:load', ready);
    })

    .directive('googleMapDirective', function(){
        return {
            restrict: 'E',
            template: '<div class="google-map-directive"><div id="map"></div></div>',
            controller: 'googleMamController'
        }
    });

