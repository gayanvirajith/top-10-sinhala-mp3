// (function() {
  'use strict';
    angular
        .module('top10')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'angularPlayer', '$timeout'];

    function MainCtrl($scope, angularPlayer, $timeout) {

        /**
         * top 10 songs
         */
        $scope.songs = [
            {
                id: 1,
                title: 'Obamada Me Hithata Mage',
                artist: 'Dimanka Wellalage',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Dimanka_Wellalage_Oba_Mada_Me_ananmanan.lk.mp3'
            },
            {
                id: 2,
                title: 'Dineka Mage Divi Gamane (Katath Kalin)',
                artist: 'Shihan Mihiranga',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Shihan_Mihiranga_Dineka_Mage_ananmanan.lk.mp3'
            },
            {
                id: 3,
                title: 'Katawath Nathi Tharam Kiya',
                artist: 'Dimanka Wellalage',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Dimanka_Wellalage_Adarey_Katawath_ananmanan.lk.mp3'
            },
            {
                id: 4,
                title: 'Akeekaruma Man Udura Wenas Kenek Mata Deela',
                artist: 'Dimanka Wellalage',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Dimanka_Wellalage_Akeekaruma_Man_Udura_ananmanan.lk.mp3'
            },
            {
                id: 5,
                title: 'Man Magemada (Hitha Hangala Nawathila)',
                artist: 'Chamika Sirimanna',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Chamika_Sirimanne_Man_Magemada_ananmanan.lk.mp3'
            },
            {
                id: 6,
                title: 'Wenwee Giyath Perada',
                artist: 'Ruwan Hettiarachchi',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Ruwan_Hettiarachchi_Wen_Wee_Giyath_ananmanan.lk.mp3'
            },
            {
                id: 7,
                title: 'Ayeth Warak Mata Wada Honda Kenek (Thibuna Nam Hungak)',
                artist: 'Sandun Perera',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Sandun_Perera_Ayeth_Warak_ananmanan.lk.mp3'
            },
            {
                id: 8,
                title: 'Thanikadai Thama Man',
                artist: 'Viraj Perera',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Viraj_Perera_Thanikadai_Thama_Man_ananmanan.lk.mp3'
            },
            {
                id: 9,
                title: 'Mayawee (Pem Sihine 2)',
                artist: 'Pradeep Rangana',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Pradeep_Rangana_Mayawee_ananmanan.lk.mp3'
            },
            {
                id: 10,
                title: 'Es Deka Pura (Yannam Yannam)',
                artist: 'Sashika Nisansala',
                url: 'http://mp3.ananmanan.lk/mp3/201508/Sashika_Nisansala_Es_Deka_Pura_ananmanan.lk.mp3'
            },
        ];

        /**
         * initialize the playlist with $songs list
         */
        var initPlayList = function initPlayList() {
          angularPlayer.clearPlaylist(function(data) {
              //add songs to playlist
              for(var i = 0; i < $scope.songs.length; i++) {
                  angularPlayer.addTrack($scope.songs[i]);
              }
              // if (attrs.play != 'false') {
              //     //play first song
                  //
              // }
          });
        };

        // initPlayList();
        $scope.isPlaying = false;

        $scope.$on('music:isPlaying', function(event, data) {
          console.log('isPlaying: ' + data);
          var a = data;
            $timeout(function () {
              $scope.isPlaying = a;
            });
        });

        $scope.$on('angularPlayer:ready', function(event, data) {
          console.log('ready! ' + data);

        });

        $scope.togglePlayMusic = function palyMusic() {
            $timeout(function () {
              if (angularPlayer.isPlayingStatus()) {
                angularPlayer.pause();
                $scope.isPlaying = false;
              }else {
                $scope.isPlaying = false;
                angularPlayer.play();
              }
          });
        };

        // $scope.isBuffering = true;
        $scope.$on('currentTrack:position', function(event, data) {
            //do your stuff here
            if (data === 0) {
              $scope.isBuffering = true;
            }else {
              $scope.isBuffering = false;
            }
        });


        $timeout(function() {
            var el = document.getElementById('autoplay_element');
            angular.element(el).triggerHandler('click');
        }, 0);
    }
// })();
