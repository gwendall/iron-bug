Router.configure({
  notFoundTemplate: "notFound"
});

Router.route("/", {
  name: "found",
  template: "found",
  action: function () {
    this.render();
  }
});
