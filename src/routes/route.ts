import express from "express"
import { createTask,getAllTasks,getOneTask,deleteTask,updateOneTask } from "../controllers/controller"

const router = express.Router()

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getOneTask).delete(deleteTask).put(updateOneTask)

export default router