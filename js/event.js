var oEvent = {
  sel: {},
  containers: {
    events: "#events-container"
  },
  templates: {
    events: "#events-template"
  },
  init: function() {
    api.event.getEvents
      .get({ sellerId: "5d1c33c7c8985b30d052c612" })
      .then(function(res) {
        var render = Mustache.render($(oEvent.templates.events).html(), {
          data: res
        });
        $(oEvent.containers.events).append(render);
      });
  }
};

oEvent.init();
