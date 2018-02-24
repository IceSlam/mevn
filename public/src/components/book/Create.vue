<template>
    <div class="create_container">

        <h3>Create new book</h3>

        <form method="post" v-on:submit.prevent="create">
            <input type="text" name="title"/>
            <input type="text" name="author"/>
            <button type="submit" name="create">Create</button>
        </form>

        <br>

        back to
        <router-link to="/">home</router-link>
        or
        <router-link to="/books">list all books</router-link>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Create',

        methods: {
            create(event) {
                axios.post('http://localhost:8000/book/create', {
                    title: event.target.elements.title.value,
                    author: event.target.elements.author.value
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
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
</style>
