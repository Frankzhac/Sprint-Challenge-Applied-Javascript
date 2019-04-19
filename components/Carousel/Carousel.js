class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselSlide;
    this.leftButton = this.carouselSlide.querySelector('.left-button');
    this.rightButton = this.carouselSlie.querySelector('.right-button');
    this.imageList = this.carouselSlide.querySelectorAll('img');
    this.imageIndex = 0;
    this.images.forEach( image => image.style.display = 'flex');

    this.leftButton.addEventListener('click', () => this.slideLeft());
    this.rightButton.addEventListener('click', () => this.slideRight());
  }
  // Animations logs
  slideLeft() {
    console.log('left tab clicked!');
  }

  slideRight() {
    console.log('right tab clicked!');

  }
}

let carousel = document.querySelector('.carousel').forEach(item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
