title = new Vue({
  el: "#title",
  data() {
    return {
      message: "Bread Lib Shop"
    }
  }
})

//Hardcode, pero puede ser la respuesta de alguna Api

var cards = new Vue({
  el: '#cards',
  data: {
    items: [
      {
        nombre: "Camiseta",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$100'
      },

      {
        nombre: "Gorra",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$300'
      },

      {
        nombre: "Pantalon",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$500'
      },
      {
        nombre: "Camiseta",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$100'
      },

      {
        nombre: "Gorra",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$300'
      },

      {
        nombre: "Pantalon",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$500'
      },
      {
        nombre: "Camiseta",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$100'
      },

      {
        nombre: "Gorra",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$300'
      },

      {
        nombre: "Pantalon",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$500'
      },
      {
        nombre: "Camiseta",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$100'
      },

      {
        nombre: "Gorra",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$300'
      },

      {
        nombre: "Pantalon",
        imagen: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png",
        precio: '$500'
      }
    ]
  }
})
