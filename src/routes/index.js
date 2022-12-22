import express from "express";
import videos from "./VideoRoutes.js";
import categories from "./CategoryRoutes.js"

const routes = app => {
    app.use(
        express.json(),
        videos,
        categories
    )
}

export default routes;