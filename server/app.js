require("dotenv/config");
require("./db");

const express = require("express");
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

const app = express();

Sentry.init({
  dsn: "https://2b480980ea0644fab05b984f252f2fb2@o1124349.ingest.sentry.io/4504190696947712",
  integrations: [new Sentry.Integrations.Http({ tracing: true }), new Tracing.Integrations.Express({ app })],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

require("./config")(app);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

app.use(Sentry.Handlers.errorHandler());

require("./error-handling")(app);

module.exports = app;
