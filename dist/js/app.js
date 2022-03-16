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
    let gitButton = '';
    ports.forEach(port => {
      if (port.git_url === '') {
        gitButton = "<a href=\"#\" style=\"cursor: not-allowed;\" target=\"_blank\" title=\"This Github is private\"\n              class=\"z-2 relative bg-gray-400 text-white opacity-60 rounded-3xl inline-block mt-6 font-bold uppercase px-4 py-2\">Private Github</a>";
      } else {
        gitButton = "\n          <a href=\"".concat(port.git_url, "\" target=\"_blank\" title=\"Will open in new tab\"\n              class=\"z-2 relative bg-gray-800 text-white rounded-3xl inline-block mt-6 font-bold hover:bg-indigo-700 uppercase px-4 py-2\">Public Github link</a>\n        ");
      }

      output += "\n        <div class=\"\">\n          <div class=\"bg-white mb-4 p-6 rounded-xl shadow-2xl transition-all hover:top-1 hover:shadow-sm shadow-indigo-900/20 card relative overflow-hidden\">\n            <img class=\"w-full object-cover absolute z-0 top-0 right-0\"\n              src=\"".concat(port.img_url, "\"\n              alt=\"\">\n            <div class=\"bg-gradient-to-r from-transparent to-indigo-900 absolute top-0 left-0 z-1 w-full h-full\"></div>\n            <h4 class=\"text-indigo-50 font-extrabold mb-4 uppercase z-2 relative\">").concat(port.title, "</h4>\n            <p class=\"text-sm z-2 relative text-indigo-50\">").concat(port.desc, "</strong>\n            </p>\n            <a href=\"").concat(port.url, "\" target=\"_blank\" title=\"Will open in new tab\"\n              class=\"z-2 relative bg-indigo-900 text-white rounded-3xl inline-block mt-6 font-bold hover:bg-indigo-700 uppercase px-4 py-2\">Link to demo</a>\n            ").concat(gitButton, "\n          </div>\n        </div>\n      ");
    });
    this.cardHolder.innerHTML = output;
  }

} // end UI


const ui = new UI(); // event listeners

document.addEventListener('DOMContentLoaded', getCards); // get all portfolio cards

function getCards() {
  port.getData('dist/data/data.json').then(data => ui.showPorts(data)).catch(err => console.log(err));
}
