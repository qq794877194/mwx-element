import mwxLink1 from '../';


export default {
    title: 'mwxLink1',
    component: mwxLink1
}

export const Link = () => ({
    components: { mwxLink1},
    template: `
        <div><mwx-link1 disable="true" href="http://www.cctv.com">cctv</mwx-link1></div> 
    `
});
