import { NextApiRequest, NextApiResponse } from 'next'
import models from '../../../models';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST' && req.headers["content-type"] == 'application/json') {
    const request = req.body;

    const createArticle = async () => {
      const article = models.Article.build({
        title: request.title,
        body: request.body,
      });

      return await article.save();
    }

    if (!request.title || !request.body) {
      return res.status(400).json({ error: '400: Missing parameter' });
    }

    if (request.title.length > 100) {
      return res.status(400).json({ error: '400: title length must be lower than 100 chars' });
    }

    createArticle()
      .then(article => res.status(200).json({ article: article }))
      .catch(() => res.status(500).json({ error: '500: Exception caught' }));
  }
}
