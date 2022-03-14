// class for getting data

class Portfolio {
  async getData(url) {
    const result = await fetch(url);
    const resData = await result.json();

    return resData;
  }
}

const port = new Portfolio();



// UI class

class UI {
  constructor() {
    this.cardHolder = document.querySelector('#cards-holder');
  }

  showPorts(ports) {
    let output = '';

    ports.forEach((port) => {

      output += `
      
        <div class="">
          <div class="bg-white mb-4 p-6 rounded-xl shadow-2xl hover:shadow-sm shadow-indigo-900/20 card relative overflow-hidden">
            <img class="w-full object-cover absolute z-0 top-0 right-0"
              src="${port.img_url}"
              alt="">
            <div class="bg-gradient-to-r from-transparent to-indigo-900 absolute top-0 left-0 z-1 w-full h-full"></div>
            <h4 class="text-indigo-50 font-extrabold mb-4 uppercase z-2 relative">${port.title}</h4>
            <p class="text-sm z-2 relative text-indigo-50">${port.desc}</strong>
            </p>
            <a href="${port.url}" target="_blank"
              class="z-2 relative bg-indigo-900 text-white rounded-3xl inline-block mt-6 font-bold hover:bg-indigo-700 uppercase px-4 py-2">Link
              to the app</a>
          </div>
        </div>
      
      `

    })

    this.cardHolder.innerHTML = output;

  }

}

// end UI

const ui = new UI();



// event listeners

document.addEventListener('DOMContentLoaded', getCards);

// get all portfolio cards

function getCards() {
  port.getData('dist/data/data.json')
    .then(data => ui.showPorts(data))
    .catch(err => console.log(err));
}
