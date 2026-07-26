const { z } = require('zod');
const { validateUrl } = require('@rendercube/shared');

const socialSchema = z.object({
  platform: z.enum(['website', 'instagram', 'linkedin', 'twitter']),
  url: validateUrl,
});

const updateSocialsValidator = z.object({
  socials: z.array(socialSchema).refine(
    (socials) => {
      const platforms = socials.map((s) => s.platform);
      return new Set(platforms).size === platforms.length;
    },
    {
      message: 'Duplicate social platforms are not allowed.',
    }
  ),
});

module.exports = {
  updateSocialsValidator,
};
