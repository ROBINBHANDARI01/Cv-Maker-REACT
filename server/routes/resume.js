import express from 'express'
import Resume from '../models/Resume.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/save', protect, async (req, res) => {
  try {
    const { title, templateId, themeId, data } = req.body;

  
    let resume = await Resume.findOne({ userId: req.user.id });

    if (resume) {
      resume.title = title || resume.title;
      resume.templateId = templateId;
      resume.themeId = themeId;
      resume.data = data;
      await resume.save();
    } else {
      resume = await Resume.create({ userId: req.user.id, title, templateId, themeId, data });
    }

    res.json({ message: 'Saved', resume });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.get('/', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.user.id });
    if (!resume) return res.status(404).json({ message: 'No resume found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;