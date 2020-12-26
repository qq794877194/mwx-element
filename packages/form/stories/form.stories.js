import mwxForm from '../';
import mwxFormItem from '../../formitem/';
import mwxInput from '../../input/';
import mwxButton from '../../button/';

export default {
    title: 'mwxForm',
    component: mwxForm
}

export const login = () => ({
    components: {mwxForm, mwxFormItem, mwxInput, mwxButton},
    template: `<mwx-form :model="user" class="form" :rules="rules" ref="form">
        <mwx-form-item label="用户名" prop="username">
            <mwx-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></mwx-input>
        </mwx-form-item>
        <mwx-form-item label="密码" prop="password">
            <mwx-input type="password" :value="user.password" @input="user.password=$event"></mwx-input>
        </mwx-form-item>
        <mwx-form-item >
            <mwx-button type="primary" @click="login">登录</mwx-button>
        </mwx-form-item>
    </mwx-form>`,
    data(){
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码'
                    },
                    {
                        max: 12,
                        min: 6,
                        message: '请输入6-12位密码'
                    }
                ]
            }
        }
    },
    methods: {
        login(){
            this.$refs.form.validate(valid => {
                if(valid){
                    alert('登录成功')
                }else{
                    alert('登录失败');
                }
            })
        }
    },
});
