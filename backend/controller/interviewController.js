import Experience from "../Models/interview.js";

export const fetchInterview = async (req, res) => {
  try {
    const experiences = await Experience.find({ approved: true }).populate('user', 'name');
    res.json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const addInterview = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;
    const newExperience = new Experience({ title, description, user: userId });
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    console.error('Error adding experience:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



export const getExperienceById = async (req, res) => {
  const { id } = req.params;
  try {
    const experience = await Experience.findById(id).populate('user', 'name');
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json(experience);
  } catch (error) {
    console.error('Error fetching experience by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const fetchfasleInterview = async (req, res) => {
  try {
    const experiences = await Experience.find({ approved: false }).populate('user', 'name');
    res.json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const acceptExperience = async (req, res) => {
  const { id } = req.params;
  try {
    const experience = await Experience.findById(id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    experience.approved = true;
    await experience.save();
    res.status(200).json({ message: 'Experience accepted successfully' });
  } catch (error) {
    console.error('Error accepting experience:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const declineExperience = async (req, res) => {
  const { id } = req.params;
  try {
    await Experience.findByIdAndDelete(id);
    res.status(200).json({ message: 'Experience deleted successfully' });
  } catch (error) {
    console.error('Error declining experience:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};