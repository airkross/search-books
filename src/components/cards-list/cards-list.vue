<template>
    <b-row>
        <cards-list-item v-for="item in items" :key="item.id"></cards-list-item>
    </b-row>
</template>

<script>
import CardsListItem from './cards-list-item.vue'

export default {
    name: 'cards-list',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    components: {
        CardsListItem,
    }
}
</script>