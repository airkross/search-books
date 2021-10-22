<template>
    <b-container>
        <b-row>
            <div class="mt-4">
                Всего: {{getBooksCount}}
            </div>
        </b-row>
        <b-row>
            <b-col>
                <search
                    @search-data="setBooks"
                ></search>
            </b-col>
        </b-row>
        <cards-list
            v-if="books"
            :items="books.items"
        ></cards-list>
        <b-row>
            <b-col>
                <!-- <pagination
                    :current-page="currentPage"
                    :rows="rows"
                    @change-page="getBooks"
                ></pagination> -->
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Search from '../components/search/search.vue'
// import Pagination from '../components/pagination/pagination.vue'
import CardsList from '../components/cards-list/cards-list.vue'

export default {
    data() {
        return {
            books: null
        }
    },
    computed: {
        getBooksCount() {
            return this.books && this.books.totalItems ? this.books.totalItems : 0
        }
    },
    methods: {
        setPage(page) {
            this.currentPage = page
        },
        setBooks(books) {
            this.books = books
        },
    },
    components: {
        Search,
        // Pagination,
        CardsList
    },
}
</script>