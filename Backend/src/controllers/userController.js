import User from '../models/userModel.js';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const {
      name,
      email,
      user_image,
      User_verification_status,
      user_id,
      user_type,
      account_provider,
      account_creation_date,
      last_login
    } = req.body;

    if (!name || !email || !user_image || !User_verification_status || !user_id || !user_type || !account_provider || !account_creation_date || !last_login) {
      return res.status(400).json({ error: "Insufficient data" });
    }

    const user = new User({
      name,
      email,
      user_image,
      User_verification_status,
      user_id,
      user_type,
      account_provider,
      account_creation_date,
      last_login
    });
    await user.save();
    res.status(201).json(user);
    
  } catch (error) {
    next(error);
  }
};

// Update a user
export const updateUser = async (req, res, next) =>{
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedUser = await User.findOneAndUpdate({user_id:id}, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    next(error);
  }
};

// Delete a user
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findOneAndDelete({user_id:id});

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    next(error);
  }
};