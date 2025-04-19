
import Notice from '../Models/notice.js';

export const addNotice = async (req, res) => {
    try {
      const { title, content } = req.body;
      const newNotice = new Notice({ title, content });
      await newNotice.save();
      res.status(201).json({ message: 'Notice added successfully', notice: newNotice });
    } catch (error) {
      console.error('Error adding notice:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



export const getTopNotices = async (req, res) => {
    try {
      const topNotices = await Notice.find().sort({ createdAt: -1 }).limit(4);
      res.status(200).json(topNotices);
    } catch (error) {
      console.error('Error fetching top notices:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
 
  export const getAllNotices = async (req, res) => {
    try {
      const allNotices = await Notice.find().sort({ createdAt: -1 });
      res.status(200).json(allNotices);
    } catch (error) {
      console.error('Error fetching all notices:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
