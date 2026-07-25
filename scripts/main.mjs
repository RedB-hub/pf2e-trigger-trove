import { setupAPI } from "./api.js";

Hooks.once("triggerEngine.registerTriggers", (registerTriggers) => {
  const primarySystem = game.system.id;
  const secondarySystem = primarySystem === "pf2e" ? "sf2e" : "pf2e";
  const isAnachronismActive = game.modules.get(`${secondarySystem}-anachronism`)?.active;
  
  registerTriggers("trigger-engine", "pf2e-trigger", "modules/pf2e-trigger-trove/triggers/base-triggers.json");
  registerTriggers("trigger-engine", "pf2e-trigger", `modules/pf2e-trigger-trove/triggers/${primarySystem}-triggers.json`);
  
  if (isAnachronismActive) {
    registerTriggers("trigger-engine", "pf2e-trigger", `modules/pf2e-trigger-trove/triggers/${secondarySystem}-triggers.json`);
  };
});

Hooks.once("ready", function() {
  setupAPI();
});