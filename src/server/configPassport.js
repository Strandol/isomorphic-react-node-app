import passport from 'passport';
import bcrypt from 'bcrypt';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { SECRET_KEY } from './config';
import User from './models/user';

async function generateHash(password) {
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	return hash;
}

async function validatePassword(password, hash) {
	return bcrypt.compare(password, hash);
}

function configPassport() {
	passport.use('login', new LocalStrategy(
		async (username, password, cb) => {
			try {
				const user = await User.findOne({ username });

				if (!user) return cb(null, false, { message: 'User is not found!' });

				const isPasswordCorrect = await validatePassword(password, user.hash);

				if (!isPasswordCorrect) return cb(null, false, { message: 'Password is not correct!' });

				cb(null, user);
			} catch (err) {
				cb(err);
			}
		}));

	passport.use('signup', new LocalStrategy(async (username, password, cb) => {
		try {
			const user = await User.findOne({ username });

			if (user) return cb(null, false, 'User already exists!');

			const newUser = new User();

			newUser.username = username;
			newUser.hash = await generateHash(String(password));
			await newUser.save();

			cb(null, newUser);
		} catch (err) {
			cb(err);
		}
	}));

	passport.use(new JWTStrategy({
		secretOrKey: SECRET_KEY,
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	}, (token, done) => {
		return done(null, token.user);
	}));
}

export default configPassport;