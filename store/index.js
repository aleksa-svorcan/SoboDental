import Vuex from 'vuex'
import Vue from 'vue'
import factsJson from '../data/sobo_facts.json'
import membersJson from '../data/sobo_members.json'
import servicesJson from '../data/sobo_services.json'
import missionsJson from '../data/sobo_mission.json'
import testemonialsJson from '../data/sobo_testemonials.json'
import mutations from './mutations'
import getters from './getters'


const store = () => {
  return new Vuex.Store({
  state: () => ({
    isMemberOpen: false,
    isSidebarOpen: false,
    services: servicesJson,
    members: membersJson,
    facts: factsJson,
    missions: missionsJson,
    testemonials: testemonialsJson
  }),
    getters,
    mutations
  })
}

export default store
