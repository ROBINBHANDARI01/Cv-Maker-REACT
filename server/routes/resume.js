import express from 'express'
import Resume from '../models/resume.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/save', protect, async (req, res) => {
  try {
    const { title, templateId, themeId, data } = req.body; 

    // FIX: Extracts whichever property exists on your JWT payload string
    const currentUserId = req.user._id || req.user.id;

    if (!currentUserId) {
      return res.status(400).json({ message: 'User ID could not be found in token payload' });
    }

    let resume = await Resume.findOne({ userId: currentUserId });

    if (resume) {
      // Update existing record safely
      resume.title = title || resume.title;
      resume.templateId = templateId || resume.templateId;
      resume.themeId = themeId || resume.themeId; // Keeping themeId!
      resume.data = data || resume.data;
      await resume.save();
    } else {
      // Create a brand new record
      resume = await Resume.create({ 
        userId: currentUserId, 
        title, 
        templateId, 
        themeId, // Keeping themeId!
        data 
      });
    }

    res.json({ message: 'Saved successfully', resume });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.get('/', protect, async (req, res) => {
  try {
    const currentUserId = req.user._id || req.user.id;
    
    const resume = await Resume.findOne({ userId: currentUserId });
    if (!resume) return res.status(404).json({ message: 'No resume found' });
    
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
