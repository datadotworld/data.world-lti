import * as express from 'express';
import * as passport from 'passport';

export const router = express.Router();

router.get('/authorize', passport.authenticate('data.world'));

router.get('/authorize/callback',

    passport.authenticate('data.world', { successRedirect: '/', failureRedirect: '/login' })

);