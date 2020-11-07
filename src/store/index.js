import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        home: [],
        berita: [],
        guru: [],
        alumni: [],
        tata_usaha: [],
        galleries: [],
        count_guru: 3,
        count_berita: 3,
        details_berita: [], 
        profile: []
    },
    getters: {
    },
    actions: {
        fetchHome({ commit }) {
            api()
                .get('/api/v1/home')
                .then(data => {
                    commit('SET_HOME', data)
                    commit('SET_GURU', data.data.data.guru)
                })
        },
        fetchBerita({ commit }) {
            api()
                .get('/api/v1/berita')
                .then(data => {
                    commit('SET_BERITA', data.data.data)
                })
        },
        fetchDetailsBerita({ commit }, { id }){
            let uri = '/api/v1/berita/'+id
            api()
                .get(uri)
                .then(data => {
                    commit('SET_DETAILS_BERITA', data.data.data)
                })
        },
        fetchDetailsKontak({commit}, {id, tipe}){
            let uri = '/api/v1/' + tipe + '?tipe=' + id.toUpperCase()
            api()
                .get(uri)
                .then((res) => {
                    switch (id){
                        case 'guru':
                            commit('SET_GURU', res.data.data.guru);
                            break;
                        case 'tata_usaha':
                            commit('SET_TATA_USAHA', res.data.data.tata_usaha);
                            break;
                        case 'alumni':
                            commit('SET_ALUMNI', res.data.data.alumni);
                            break;
                    }
                })
        },
        fetchDetailsProfile({commit},{id, tipe}){
            let uri = '/api/v1/' + tipe + '?tipe=' + id.toUpperCase()
            api()
                .get(uri)
                .then((res) => {
                    commit('SET_PROFILE', res.data.data.profile)
                })
        },
        loadMoreDataGuru({ commit }){
            if(this.state.guru.length > this.state.count_guru)
            {
                commit('INCREASE_COUNT_GURU')
            } else {
                commit('COUNT_GURU_MAX')
            }
        },
        loadMoreBerita({ commit }){
            if(this.state.berita.length > this.state.count_berita)
            {
                commit('INCREASE_COUNT_BERITA')
            } else {
                commit('COUNT_BERITA_MAX')
            }
        }
    },
    mutations: {
        SET_HOME(state, data){
            state.home = data
        },
        SET_GURU(state, data){
            state.guru = data
        },
        SET_TATA_USAHA(state, data){
            state.tata_usaha = data
        },
        SET_ALUMNI(state, data){
            state.alumni = data
        },
        SET_BERITA(state, data){
            state.berita = data
        },
        SET_PROFILE(state, data){
            state.profile = data
        },
        SET_DETAILS_BERITA(state, data){
            state.details_berita = data
        },
        INCREASE_COUNT_GURU(state, val = 3){
            state.count_guru += val
        },
        COUNT_GURU_MAX(state){
            state.count_guru = state.guru.length
        },
        INCREASE_COUNT_BERITA(state, val = 3){
            state.count_berita += val
        },
        COUNT_BERITA_MAX(state){
            state.count_berita = state.berita.length
        }
    }
})