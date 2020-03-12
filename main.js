import{ VideCarousel } from "./components/carousel.js";

let videoCarousel = new VideCarousel(
  [
    {
      title: "Parasite",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      src: "http://p.demo.flowplayer.netdna-cdn.com/vod/demo.flowplayer/bbb-800.mp4"
    },
    {
      title: "The Shawshank Redemption",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
      src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      title: "The Godfather II",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
      src: "http://p.demo.flowplayer.netdna-cdn.com/vod/demo.flowplayer/bbb-800.mp4"
    },
    {
      title: "O Auto da Compadecida",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg",
      src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      title: "The Dark Knight",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/pKKvCaL1TPTVtbI6EeliyND3api.jpg",
      src: "http://p.demo.flowplayer.netdna-cdn.com/vod/demo.flowplayer/bbb-800.mp4"
    },
    {
      title: "The Lord of The Rings, The Return of The King",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      title: "Your Name",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
      src: "http://p.demo.flowplayer.netdna-cdn.com/vod/demo.flowplayer/bbb-800.mp4"
    },
    {
      title: "Forrest Gump",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
      src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      title: "Schindler's List",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
      src: "http://p.demo.flowplayer.netdna-cdn.com/vod/demo.flowplayer/bbb-800.mp4"
    },
    {
      title: "We All Loved Each Other So Much",
      poster: "http://hybridtv.ss7.tv/techtest/assets/posters/zGGWYpiKNwjpKxelPxOMqJnUgDs.jpg",
      src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    }
  ]
  ,
  { carouselWrapper: "carousel-wrapper", activeElement: "active-video" }
);

let carousel = videoCarousel.render();

document.getElementById("root").appendChild(carousel);
