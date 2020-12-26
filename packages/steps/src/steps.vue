<template>
    <div class="mwx-steps">
        <div class="mwx-steps-line"></div>
        <div class="mwx-step" :style="{color: active >= item ? activeColor : defaultColor}" v-for="item in count" :key="item">{{item}}</div>
    </div>
</template>

<script>
    import './steps.css';
    export default {
        name: "mwx-steps",
        props: {
            count: {
                type: Number,
                default: 3
            },
            active: {
                type: Number,
                default: 0
            },
            activeColor: {
                type: String,
                default: 'red'
            },
            defaultColor: {
                type: String,
                default: 'green'
            }
        }
    }
</script>

<style scoped>

</style>
