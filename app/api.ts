import routes from "./routes"

export const initApi = (app: any) => {
  app.use("/trees", routes.tree);
};
