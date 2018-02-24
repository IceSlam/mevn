<template>
    <div class="home_container">

        <router-link to="/book/create">Go to create a new book</router-link>
        <p>or</p>
        <router-link to="/books">List all books</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Home'
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
