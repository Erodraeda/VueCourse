const app = Vue.createApp({
    data() {
        return {
            me: {
                name: 'Lucas Walter',
                age: 21,
                fav_number: Math.random(),
                img_src: 'https://misteriosdomundo.org/wp-content/uploads/2020/05/16-imagens-incr%C3%ADveis-da-natureza-que-voc%C3%AA-jamais-esperaria-ver-na-vida-15.jpg',
                input_value: 'THIS FOX SO CUTE',
            }
        }
    },
    methods: {
        future_age() {
            const future_age = this.me.age + 5
            return future_age
        }
    }
})

app.mount('#assignment')

