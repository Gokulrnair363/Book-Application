const router=require('express').Router();
const userController=require('../Controller/UserController');

router.post('/register',userController.registerController);
router.post('/login',userController.loginController);

module.exports=router;