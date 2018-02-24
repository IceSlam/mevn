<template>
    <div class="book_container">

        <p>{{ this.book.title }} <span> :title</span></p>
        <p>{{ this.book.author }} <span> :author</span></p>
        <p>{{ this.moment(this.book.createdAt) }} <span> :created at</span></p>

        <router-link to="/books">back</router-link>

    </div>
</template>

<script>
    import axios from 'axios'
    import moment from 'moment'

    export default {
        name: 'Book',

        data() {
            return {
                book: ''
            }
        },

        mounted () {
            this.getBook();
        },

        methods: {
            async getBook() {
                try {
                    const response = await axios.get('http://localhost:8000/book/' + this.$route.params.id);
                    this.book = response.data;
                } catch (error) {
                    console.error(error);
                }
            },

            moment(date) {
                return moment().startOf(date).fromNow();
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
    span {
        font-size: 12px;
    }
</style>
