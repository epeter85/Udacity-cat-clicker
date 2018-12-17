/*jshint esversion: 6 */
(function () {
  "use strict";
  class Cat {

    constructor(name, imageSrc) {
      this.name = name;
      this.imageSrc = imageSrc;
      this.clicks = 0;
    }

    render() {
      console.log('rendering');

      let app = document.getElementById('app');

      //add wrapper
      let wrapper = document.createElement("div");
      wrapper.id = this.name;
      app.appendChild(wrapper);

      //add cat name
      let title = document.createElement("h1");
      let titleNode = document.createTextNode(this.name);
      title.appendChild(titleNode);
      wrapper.appendChild(title);

      //add cat image
      let img = document.createElement("img");
      img.src = this.imageSrc;
      wrapper.appendChild(img);

      //add counter
      let tally = document.createElement("p");
      let textNode = document.createTextNode('Number of clicks: 0');
      tally.appendChild(textNode);
      wrapper.appendChild(tally);

      img.addEventListener('click', this.updateCount.bind(this));

    }

    updateCount() {
      this.clicks++;
      let elem = document.getElementById(this.name);
      let copy = elem.getElementsByTagName("p")[0];
      copy.innerHTML = 'Number of clicks: ' + this.clicks;
    }
  }

  const cat1 = new Cat('Larry', 'img/kitten.jpg');
  cat1.render();

  const cat2 = new Cat('Bob', 'img/cat.jpg');
  cat2.render();

}());
