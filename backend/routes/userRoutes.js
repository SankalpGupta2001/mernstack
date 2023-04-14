import express from "express";
const router= express.Router();
import { followers, unfollowers,getUserProfile,updateUserProfile} from "../controllers/userController.js";

router.route('/:id').get(getUserProfile).put(updateUserProfile)

router.route("/follow").put(followers);
router.route("/unfollow").put(unfollowers);

export default router;
