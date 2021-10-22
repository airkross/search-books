<template>
    <b-form-input v-model="bookName" placeholder="Данные о книге" class="my-4" debounce="500"></b-form-input>
</template>

<script>
import { getBooks } from '../../api.js'

export default {
    name: 'search',
    data() {
        return {
            bookName: ''
        }
    },
    watch: {
        bookName(queryText) {
            if(queryText){
                this.$router.replace({ query: { search: queryText } })

                const req = {
                    params: {
                        q: queryText
                    }
                }
                getBooks(req)
                    .then(res => {
                        this.$emit('search-data', res)
                    })
                    .catch(error => {
                        console.error(error)
                        this.$emit('search-data', null)
                    })
            } else {
                this.$router.replace('/')
                this.$emit('search-data', null)
            }
        }
    },
    created() {
        if(this.$route.query && this.$route.query.search) {
            this.bookName = this.$route.query.search
        }
    }
}
</script>