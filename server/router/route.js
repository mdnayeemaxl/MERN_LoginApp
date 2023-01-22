import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController.js'

router.route('/register').post(controller.register);
router.route('/registerMail').post();
router.route('/authenticate').post();
router.route('/login').post(controller.login);


router.route('/user/:username').get();
router.route('/generateOTP').get();
router.route('/verifyOTP').get();
router.route('createResetSession').get();

router.route('/updateuser').put();
router.route('/resetPassword').get();


export default router;