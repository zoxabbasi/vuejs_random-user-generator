// This takes in an object
const app = Vue.createApp({

    // template:  '<h1> Hello {{ firstName }}</h1>',

    // Data is a function that returns an object
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },

    // This is how we define methods
    methods: {
        // Open the console and click on the button and you will see "John"
        // getUser(){
        //     console.log(this.firstName);
        // }

        // Using Fetch API with ASYNC Await
        // First mark the function as asyncrous
        async getUser() {

            // const response, we want to wait on fetch URL
            const res = await fetch('https://randomuser.me/api')

            // const variable in which we will put the data from await response.json
            // const data  = await res.json()

            // What it gives us is a results array with single user by default,
            // so instead of putting it in data, we will destructure results
            const { results } = await res.json()

            // console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large

        },
    },
})

// To mount this app to the div
app.mount('#app') 