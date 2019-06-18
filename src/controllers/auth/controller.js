import User from '../../model/user';

const auth = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email }).exec();
    user.verifyPassword(password, res, next);
  } catch (e) {
    next(e);
  }
};

export default {
  auth,
};
