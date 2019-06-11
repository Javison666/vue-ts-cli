
<template>
    <div>
        <SlickList lockAxis="y" :transitionDuration="250" v-model="items">
            <SlickItem v-for="(item, index) in items" :index="index" :key="index">{{ item }}</SlickItem>
        </SlickList>
    </div>
</template>

<script>
import { SlickList, SlickItem } from "vue-slicksort";

export default {
    components: {
        SlickItem,
        SlickList
    },
    data: () => ({
        items: [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5",
            "Item 6",
            "Item 7",
            "Item 8"
        ]
    })
};
</script>
<style lang="scss" scoped>
div {
    text-align: left;
}
</style>
