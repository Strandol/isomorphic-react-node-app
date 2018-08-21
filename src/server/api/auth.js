import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

const router = Router();

function generateToken(body, secretKey) {
	return jwt.sign(body, secretKey);
}

router.post('/login', passport.authenticate('login',
	{ session: false }),
	(req, res) => {
		const token = generateToken({
			user: {
				_id: req.user.id,
				username: req.user.username
			}
		}, SECRET_KEY);

		res.status(200).json(token);
	});

router.post('/signup', passport.authenticate('signup',
	{ session: false }),
	(req, res) => {
		const token = generateToken({
			user: {
				_id: req.user.id,
				username: req.user.username
			}
		}, SECRET_KEY);

		res.status(200).json(token);
	});

export default router;
