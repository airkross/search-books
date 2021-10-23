<template>
    <b-form-input v-model="queryText" placeholder="Данные о книге" class="my-4" debounce="500"></b-form-input>
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
    // watch: {
    //     '$route.query.search'(val) {
    //         if(val) {
    //             this.getBooks(val).then(res => {
    //                     this.$emit('search-data', res)
    //                 }).catch(error => {
    //                     console.error(error)
    //                     this.$emit('search-data', null)
    //                 })
    //         } else {
    //             this.$emit('search-data', null)
    //         }
    //     }
    // },
    computed: {
        queryText: {
            get() {
                return this.bookName
            },
            set(newValue) {
                this.bookName = newValue

                if(this.bookName) {
                    this.getBooks(this.bookName).then(res => {
                        this.$emit('search-data', res)
                    }).catch(error => {
                        console.error(error)
                        this.$emit('search-data', null)
                    })
                } else {
                    this.$emit('search-data', null)
                }
                
                this.updateURL(this.bookName)
            }
        }
    },
    methods: {
        updateURL(queryText) {
            if(queryText){
                this.$router.replace({ query: { search: queryText } })
            } else {
                this.$router.replace('/')
            }
        },
        getBooks(queryText) {
            const req = {
                params: {
                    q: queryText
                }
            }

            return getBooks(req)
        }
    },
    created() {
        if(this.$route.query && this.$route.query.search) {
            this.bookName = this.$route.query.search
            this.getBooks(this.bookName).then(res => {
                this.$emit('search-data', res)
            }).catch(error => {
                console.error(error)
                this.$emit('search-data', null)
            })
        }
    }
}
</script>