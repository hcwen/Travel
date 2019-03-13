let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
    city: defaultCity
    // actions:{
    //   changeCity(ctx,city){
    //     ctx.commit('changeCity',city)
    //   }
    // },
}