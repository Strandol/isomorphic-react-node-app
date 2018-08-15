import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).send({
    status: true,
    message: 'User is logged in'
  });
});

export default router;
