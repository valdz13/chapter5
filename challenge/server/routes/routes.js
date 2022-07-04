import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();


router.get('/', controller.home_index);
router.get('/index', (req, res) => {
  res.redirect('/');
});
router.get('/home', (req, res) => {
  res.redirect('/');
});

router.get('/game', controller.rps_index);
router.get('/gameHistory', controller.game_history);

router.post('/game', controller.rps_history);
router.delete('/gameHistory', controller.delete_game_history);

export default router;
