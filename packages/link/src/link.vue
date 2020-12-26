<template>
<div>
    <a :href="!disable && href" :class="[disable && 'disabled', !underline && 'no-underline']" >
        <slot></slot>
    </a>
</div>
</template>

<script>
    export default {
        name: "mwxLink1",
        props: {
            href: {
                type: String,
            },
            disable: {
                type: Boolean,
                default: false
            },
            underline: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
.disabled{
    cursor: not-allowed;
}
    .no-underline{
        text-decoration: none;
    }
</style>
