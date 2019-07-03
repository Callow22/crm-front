var api = new RestClient("http://localhost:3000/API");
api.res("users");
api.res("lead");
api.res("call");
api.res("event");

api.users.res("login");

api.lead.res("getLeads");

api.call.res("getCalls");

api.event.res("getEvents");
