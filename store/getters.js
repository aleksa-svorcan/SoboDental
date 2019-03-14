const getters = {
  // facts
  getFacts: state => state.facts.map(fact => fact.fields),
  // getFacts: function (state) {
  //   var facts = []
  //   state.facts.forEach((item) => {
  //     facts.push(item.fields)
  //   })
  //   return facts
  // }
  getFactsTitle: state => state.facts.map(fact => fact.fields.title),
  getFactsContent: state => state.facts.map(fact => fact.fields.content),
  // members
  getMembers: state => state.members,
  getMembersByGroup: state => group => state.members.filter(member => member.fields.group === group),
  getMembersDoctors: state => state.members.filter(member => member.fields.group === 'doctors'),
  getMembersAssistants: state => state.members.filter(member => member.fields.group === 'assistants'),
  getMembersHygienists: state => state.members.filter(member => member.fields.group === 'hygienists'),
  getMembersAdmins: state => state.members.filter(member => member.fields.group === 'admin'),
  getMemberBySlug: state => slug => state.members.find(m => m.fields.slug === slug),
  // testimonials
  getTestemonials: state => state.testemonials,
  // missions
  getMissions: state => state.missions,
  // services
  getServices: state => state.services,
  getServicesTitle: state => state.services.map(service => service.fields.title),
  getServicesSorted: state => state.services.sort(function (a, b) {
    var A = a.fields.title.toUpperCase()
    var B = b.fields.title.toUpperCase()
    return (A < B) ? -1 : (A > B) ? 1 : 0
  })
}

export default getters
