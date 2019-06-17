import User from '../../model/user';

const create = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.status(200).json(user);
  } catch (e) {
    console.log('error ', e);
    next(e);
  }
};

export default {
  create,
};
