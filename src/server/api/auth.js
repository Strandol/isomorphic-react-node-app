import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

const router = Router();

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({
    user: {
      _id: req.user.id,
      username: req.user.username
    }
  }, SECRET_KEY
);

  res.status(200).json(token);
});

export default router;
