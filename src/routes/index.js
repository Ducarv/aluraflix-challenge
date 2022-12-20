import express from "express";
import videos from "./VideoRoutes.js";

const routes = app => {
    app.use(
        express.json(),
        videos
    )
}

export default routes;