import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Books from '@/components/book/Books'
import Book from '@/components/book/Book'
import Create from '@/components/book/Create'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/books',
            name: 'Books',
            component: Books
        },
        {
            path: '/book/create',
            name: 'Create',
            component: Create
        },
        {
            path: '/book/:id',
            name: 'Book',
            component: Book
        }
    ]
})
