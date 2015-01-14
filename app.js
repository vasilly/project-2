// Code goes here

(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = 1//imageNumber++ || 0;
var c=document.getElementById("c0");
var ctx=c.getContext("2d");
ctx.rect(0,0,c.width,c.height);
ctx.stroke();
    };
      console.log(this);


  });

  app.controller('StoreController', function() {
    this.products = gems;
    //console.log(this)

  });


  app.controller("ReviewController", function(){

    this.review = {};


    this.addReview = function(product){
      console.log("product")
console.log(product)
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};

var c=document.getElementById("c");
var ctx=c.getContext("2d");
ctx.rect(0,0,c.width,c.height);
ctx.stroke();
    };

  });

  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "http://cl.zdn.io/UuY7/gem-02.gif",
      "http://cl.zdn.io/UuWP/gem-05.gif",
      "http://cl.zdn.io/UuD4/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@thomas.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@hater.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "http://cl.zdn.io/UvAK/gem-01.gif",
      "http://cl.zdn.io/Uuwd/gem-03.gif",
      "http://cl.zdn.io/UuVP/gem-04.gif",
    ],
    reviews: [{
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@sausage.com",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@alyssaNicoll.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "http://cl.zdn.io/Uv3v/gem-06.gif",
      "http://cl.zdn.io/Uu84/gem-07.gif",
      "http://cl.zdn.io/Uuky/gem-10.gif"
    ],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@zdn.me",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@gmail.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@flatland.com",
      createdOn: 1397490980837
    }]
  }];

})();
