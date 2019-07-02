var oLead = {
  sel: {},
  containers: {
    allLeads: "#all-leads-container"
  },
  templates: {
    allLeads: "#all-leads-template"
  },
  init: function() {
    api.lead.getLeads.get().then(function(res) {
      var render = Mustache.render($(oLead.templates.allLeads).html(), {
        data: res
      });
      $(oLead.containers.allLeads).append(render);
    });
  }
};

oLead.init();
