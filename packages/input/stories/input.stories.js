import mwxInput from '../';

export default {
    title: 'mwxInput',
    component: mwxInput
}

export const Text = () => ({
    components: { mwxInput },
    template: '<mwx-input v-model="value"></mwx-input>',
    data(){
        return {
            value: 'admin'
        }
    }
});

export const Password = () => ({
    components: { mwxInput },
    template: '<mwx-input type="password" v-model="value"></mwx-input>',
    data(){
        return {
            value: 'admin'
        }
    }
});
