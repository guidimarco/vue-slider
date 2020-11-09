var app = new Vue({
    el: "#root",
    data: {
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
        nextImg() { // next-img function
            this.carouselIndex++;
            if (this.carouselIndex == this.carouselImg.length) {
                this.carouselIndex = 0;
            }
        },
        prevImg() { // prev-img function
            this.carouselIndex--;
            if (this.carouselIndex < 0) {
                this.carouselIndex = this.carouselImg.length - 1;
            }
        },
        toDotImg(index) { // dot-change-img
            this.carouselIndex = index;
        }
    }
});
