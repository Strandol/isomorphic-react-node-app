import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json({
    message: 'You get access to secure route',
    user: req.user,
    token: req.header('Authorization')
  });
});

export default router;
