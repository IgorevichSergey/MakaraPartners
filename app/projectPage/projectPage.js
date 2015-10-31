angular.module('projectPage', [
    'footer.directive',
    'gradient.directive'
])
    .constant('galleryConfig', {
        data:[
            {img_src: 'images/realizacje(gallery)/1.jpg',id:1},
            {img_src: 'images/realizacje(gallery)/2.jpg',id:2},
            {img_src: 'images/realizacje(gallery)/3.jpg',id:3},
            {img_src: 'images/realizacje(gallery)/4.jpg',id:4},
            {img_src: 'images/realizacje(gallery)/5.jpg',id:5},
            {img_src: 'images/realizacje(gallery)/6.jpg',id:6},
            {img_src: 'images/realizacje(gallery)/7.jpg',id:7},
            {img_src: 'images/realizacje(gallery)/8.jpg',id:8},
            {img_src: 'images/realizacje(gallery)/9.jpg',id:9},
            {img_src: 'images/realizacje(gallery)/10.jpg',id:10},
            {img_src: 'images/realizacje(gallery)/11.jpg',id:11},
            {img_src: 'images/realizacje(gallery)/12.jpg',id:12},
            {img_src: 'images/realizacje(gallery)/13.jpg',id:13},
            {img_src: 'images/realizacje(gallery)/14.jpg',id:14},
            {img_src: 'images/realizacje(gallery)/15.jpg',id:15},
            {img_src: 'images/realizacje(gallery)/16.jpg',id:16},
            {img_src: 'images/realizacje(gallery)/17.jpg',id:17},
            {img_src: 'images/realizacje(gallery)/18.jpg',id:18},
            {img_src: 'images/realizacje(gallery)/19.jpg',id:19},
            {img_src: 'images/realizacje(gallery)/20.jpg',id:20},
            {img_src: 'images/realizacje(gallery)/21.jpg',id:21},
            {img_src: 'images/realizacje(gallery)/22.jpg',id:22},
            {img_src: 'images/realizacje(gallery)/23.jpg',id:23},
            {img_src: 'images/realizacje(gallery)/24.jpg',id:24},
            {img_src: 'images/realizacje(gallery)/25.jpg',id:25},
            {img_src: 'images/realizacje(gallery)/26.jpg',id:26},
            {img_src: 'images/realizacje(gallery)/27.jpg',id:27},
            {img_src: 'images/realizacje(gallery)/28.jpg',id:28}
        ]
    })
    .controller('projectPageCtrl', function(galleryConfig){
        var self = this;

        self.gallery = galleryConfig.data;
        self.bigImage = self.gallery[0].img_src;
        self.imageSet = function(obj){
            //console.log('img_src', img_src);
            self.bigImage = obj.img_src;
        };
    });