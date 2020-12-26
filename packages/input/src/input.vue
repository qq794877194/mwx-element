<template>
<div>
    <input :type="type" v-bind="$attrs" @input="handleInput">
</div>
</template>

<script>
    export default {
        name: "mwxInput",
        inheritAttrs: false,
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type: String
            }
        },
        methods: {
            handleInput(e){
                this.$emit('input',e.target.value);
                const findParent = parent => {
                    while(parent){
                        if(parent.$options.name === 'mwxFormItem'){
                            break;
                        }
                        parent = parent.$parent;
                    }
                    return parent;
                };
                const parent = findParent(this.$parent);
                if(parent){
                    parent.$emit('validate');
                }
            }
        }
    }
</script>

<style scoped>

</style>
