var oCallLog = {
  sel: {},
  containers: {
    callLog: "#call-log-container"
  },
  templates: {
    callLog: "#call-log-template"
  },
  init: function() {
    var data = [
      {
        imie: "marian"
      },
      {
        imie: "wiesiek"
      },
      {
        imie: "kazachstan"
      }
    ];
    var render = Mustache.render($(oCallLog.templates.callLog).html(), {
      data: data
    });
    $(oCallLog.containers.callLog).append(render);
  }
};

oCallLog.init();
