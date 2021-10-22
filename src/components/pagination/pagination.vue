<template>
    <div class="mt-3">
        <b-pagination v-model="currentPage" :total-rows="rows" align="center" @change="changePage"></b-pagination>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: {
       
    },
    methods: {
        changePage(event) {
            this.$emit('change-page', event)
        }
    }
}
</script>