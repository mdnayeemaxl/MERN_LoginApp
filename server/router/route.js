import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController.js'
import Auth,{localVariables} from "../middleware/auth.js"
import { registerMail } from "../controllers/Mailer.js";

router.route('/register').post(controller.register);
router.route('/registerMail').post(registerMail);
router.route('/authenticate').post(controller.verifyUser,(req,res)=>{});
router.route('/login').post(controller.verifyUser,controller.login);


router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.verifyUser,localVariables,controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyUser,controller.verifyOTP);
router.route('createResetSession').get();

router.route('/updateuser').put(Auth,controller.updateUser);
router.route('/resetPassword').put(controller.verifyUser,controller.resetPassword);


export default router;