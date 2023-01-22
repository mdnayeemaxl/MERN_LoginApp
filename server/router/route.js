import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController.js'
import Auth from "../middleware/auth.js"

router.route('/register').post(controller.register);
router.route('/registerMail').post();
router.route('/authenticate').post();
router.route('/login').post(controller.verifyUser,controller.login);


router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get();
router.route('/verifyOTP').get();
router.route('createResetSession').get();

router.route('/updateuser').put(Auth,controller.updateUser);
router.route('/resetPassword').get();


export default router;