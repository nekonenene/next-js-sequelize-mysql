import { NextApiRequest, NextApiResponse } from 'next'
import models from '../../../models';

export default (_: NextApiRequest, res: NextApiResponse) => {
  const listArticles = async () => {
    return models.Article.findAll();
  }

  listArticles()
    .then(articles => res.status(200).json({ articles: articles }))
    .catch(() => res.status(500).json({ error: '500: Exception caught' }));
}
