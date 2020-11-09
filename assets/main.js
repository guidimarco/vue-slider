var app = new Vue({
    el: "#root",
    data: {
        autoplay: "null",
        title: "Le mie immagini",
        carouselIndex: 0,
        carouselImg: [
            "img/smile.jpg",
            "img/faro.jpg",
            "img/juice.webp",
            "img/albero.jpg"
        ]
    },
    methods: {
        nextImg: function() { // next-img function
            this.carouselIndex++;
            if (this.carouselIndex == this.carouselImg.length) {
                this.carouselIndex = 0;
            }
        },
        prevImg: function() { // prev-img function
            this.carouselIndex--;
            if (this.carouselIndex < 0) {
                this.carouselIndex = this.carouselImg.length - 1;
            }
        },
        toDotImg(index) { // dot-change-img
            this.carouselIndex = index;
        },
        stopAutoplay() {
            clearInterval(autoplay);
        },
        restartAutoplay() {
            autoplay = setInterval(this.nextImg, 1000);
        },
        test: function() {
            console.log("ciao");
        }
    },
    mounted: function() {
        autoplay = setInterval(this.nextImg, 1000);

        window.addEventListener("keydown", (e) => {
            if (e.which == 37) {
                this.prevImg();
            } else if (e.which == 39) {
                this.nextImg();
            }
        });
    },
});
