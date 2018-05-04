export default {
  state: {
    ads: [
      {
        id: '123',
        title: 'First ad',
        description: 'Description First ad',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
      }, {
        id: '124',
        title: 'Second ad',
        description: 'Description Second ad',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
      }, {
        id: '125',
        title: 'Third ad',
        description: 'Description Third ad',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter((item) => {
        return item.promo
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}
