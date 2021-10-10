import routes from "./routes"

export const initApi = (app: any) => {
  app.use("/trees", routes.tree);
  app.use("/trees/:id/tiers", routes.tier);
  app.use("/trees/:id/tiers/:id/branches", routes.branch);
};
