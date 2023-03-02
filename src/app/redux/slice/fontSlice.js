import {createSlice} from '@reduxjs/toolkit'

const fontSlice = createSlice({
    name: 'font',
    initialState: {
        sf: false,
        rb: false,
        lf: true,
        mixed: true,
        hidden: true
    },
    reducers: {
        sf(state, action) {
            state.sf = !state.sf
            parent.postMessage({
                pluginMessage: {
                    type: 'font',
                    fontList: [state.lf, state.sf, state.rb, state.mixed]
                }
            }, '*');

        },
        rb(state) {
            state.rb = !state.rb
            parent.postMessage({
                pluginMessage: {
                    type: 'font',
                    fontList: [state.lf, state.sf, state.rb, state.mixed]
                }
            }, '*');

        },
        lf(state) {
            state.lf = !state.lf
            parent.postMessage({
                pluginMessage: {
                    type: 'font',
                    fontList: [state.lf, state.sf, state.rb, state.mixed]
                }
            }, '*');
        },
        mixed(state) {
            state.mixed = !state.mixed
            parent.postMessage({
                pluginMessage: {
                    type: 'font',
                    fontList: [state.lf, state.sf, state.rb, state.mixed]
                }
            }, '*');
        },
        hidden(state) {
            state.hidden = !state.hidden
            parent.postMessage({
                pluginMessage: {
                    type: 'hidden',
                    hidden: state.hidden
                }
            }, '*');
        }
    }
})

export const {sf, rb, lf, mixed,hidden} = fontSlice.actions
export default fontSlice.reducer
