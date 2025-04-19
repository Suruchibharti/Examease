import User from "../Models/Course.js";

export const uploadLink = async (req, res) => {
  try {
    const { year, branch, topic, link } = req.body;
    // console.log(req.body.year);
    const course = new User({ year, branch, topic, link });
    await course.save();
    res.status(201).json({ message: 'Link uploaded successfully!' });
  } catch (error) {
   
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getLinks = async (req, res) => {
  try {
    const { year, branch } = req.params;

    const links = await User.find({ year, branch }, 'topic link');
    // const link=await User.find();
    // console.log(year);
    // console.log(branch);
    // console.log(link);
    res.json(links);
  } catch (error) {
    console.error('Error fetching links:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


