import User from '../../model/user';

const create = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const show = async (req, res, next) => {
  try {
    const user = await User.find().select('-password');
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export default {
  create,
  show,
};
