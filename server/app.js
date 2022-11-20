require("dotenv/config");
require("./db");

const express = require("express");
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

const app = express();

Sentry.init({
  dsn: "https://dd8d80813ade466cb1ed6ba9735e3f75@o1124349.ingest.sentry.io/6162641",
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
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
