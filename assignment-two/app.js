const app = Vue.createApp({
    data() {
        return {
            typed_text: '',
            entered_text: ''
        }
    },
    methods: {
        sendAlert() {
            alert("Olá")
        },
        setName(event) {
            this.typed_text = event.target.value
        },
        setNameEnter(event) {
            this.entered_text = event.target.value
        }
    }
})

app.mount('#assignment')
