<template>
    <b-col xs="12" md="6" xl="3">
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
        >
            <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">
                Go somewhere
            </b-button>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: 'cards-list-item',
}
</script>