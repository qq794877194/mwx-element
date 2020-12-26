<template>
<div>
    <label v-if="label">{{label}}</label>
    <div>
        <slot></slot>
        <p style="color: red" v-if="errMessage">{{errMessage}}</p>
    </div>
</div>
</template>

<script>
    import asyncValidator from 'async-validator';
    export default {
        name: "mwxFormItem",
        props: {
            label: {
                type: String
            },
            prop: {
                type: String
            }
        },
        inject: ['form'],
        data(){
            return {
                errMessage: ''
            }
        },
        mounted(){
          this.$on('validate',() => {
              this.validate();
          })
        },
        methods: {
            validate(){
                if(!this.prop) return;
                const value = this.form.model[this.prop];
                const rules = this.form.rules[this.prop];

                const descriptor = {[this.prop]: rules};
                const validator = new asyncValidator(descriptor);
                return validator.validate({[this.prop]: value}, (err) => {
                    if(err){
                        this.errMessage = err[0].message;
                    }else{
                        this.errMessage = '';
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
