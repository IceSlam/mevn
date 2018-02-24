<template>
    <div class="books_container">
        <h3>List of books</h3>

            <p v-for="book in books">
                <router-link class="route" :to="'/book/' + book._id">
                    {{ book.title }} <span>by</span> {{ book.author }}
                </router-link>
            </p>

        back to
        <router-link to="/">home</router-link>
        or
        <router-link to="/book/create">create a new book</router-link>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Books',

        data () {
            return {
                books: null
            }
        },

        mounted () {
            this.getBooks()
        },

        methods: {
            async getBooks() {
                try {
                    const response = await axios.get('http://localhost:8000/books');
                    this.books = response.data;
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>


<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    ul {
        list-style: none;
    }
    span {
        color: #6e7575;
        font-size: 12px;
    }
    .route{
        text-decoration: none;
    }
</style>
