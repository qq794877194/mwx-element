import link from '../src/link.vue';
import { mount } from '@vue/test-utils';


describe('mwx-link1',() => {
    test('mwx-link1-href', () => {
        const wrapper = mount(link,{propsData: {href: "http://www.baidu.com"}});
        expect(wrapper.props('href')).toBe('http://www.baidu.com');
    });
    test('mwx-link1 disable', () => {
        const wrapper = mount(link,{propsData: {disable: true}});
        expect(wrapper.html()).toContain('disabled');
    });
});
