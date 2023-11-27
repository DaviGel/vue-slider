'use strict';

const { createApp } = Vue;

createApp({
  data() {
    let currentElement = 0;
    return {
      slides: [
        {
          image: 'img/01.webp',
          title: "Marvel's Spiderman Miles Morale",
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      currentElement,
    };
  },

  methods: {
    prevImg() {
      this.currentElement--;
      if (this.currentElement < 0) this.currentElement = this.slides.length - 1;
    },

    nextImg() {
      this.currentElement++;
      if (this.currentElement > this.slides.length - 1) this.currentElement = 0;
    },

    changeActiveThumb(index) {
      this.currentElement = index;
    },

    mouseOver() {
      clearInterval(this.change);
      console.log('cancellato intervallo');
    },

    mouseLeave() {
      this.change = setInterval(this.nextImg, 3_000);
      console.log('ricreato intervallo');
    },
  },

  mounted() {
    this.change = setInterval(this.nextImg, 3_000);
    console.log('aggiunto intervallo');
  },
}).mount('#app');
