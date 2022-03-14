"use strict";

// class for getting data
class Portfolio {
  async getData(url) {
    const result = await fetch(url);
    const resData = await result.json();
    return resData;
  }

}

const port = new Portfolio(); // UI class

class UI {
  constructor() {
    this.cardHolder = document.querySelector('#cards-holder');
  }

  showPorts(ports) {
    let output = '';
    ports.forEach(port => {
      output += "\n      \n        <div class=\"\">\n          <div class=\"bg-white mb-4 p-6 rounded-xl shadow-2xl hover:shadow-sm shadow-indigo-900/20 card relative overflow-hidden\">\n            <img class=\"w-full object-cover absolute z-0 top-0 right-0\"\n              src=\"".concat(port.img_url, "\"\n              alt=\"\">\n            <div class=\"bg-gradient-to-r from-transparent to-indigo-900 absolute top-0 left-0 z-1 w-full h-full\"></div>\n            <h4 class=\"text-indigo-50 font-extrabold mb-4 uppercase z-2 relative\">").concat(port.title, "</h4>\n            <p class=\"text-sm z-2 relative text-indigo-50\">").concat(port.desc, "</strong>\n            </p>\n            <a href=\"").concat(port.url, "\" target=\"_blank\"\n              class=\"z-2 relative bg-indigo-900 text-white rounded-3xl inline-block mt-6 font-bold hover:bg-indigo-700 uppercase px-4 py-2\">Link\n              to the app</a>\n          </div>\n        </div>\n      \n      ");
    });
    this.cardHolder.innerHTML = output;
  }

} // end UI


const ui = new UI(); // event listeners

document.addEventListener('DOMContentLoaded', getCards); // get all portfolio cards

function getCards() {
  port.getData('dist/data/data.json').then(data => ui.showPorts(data)).catch(err => console.log(err));
}
