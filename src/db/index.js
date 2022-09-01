import fs from 'fs/promises';
import path from 'path';

class Post {
  static async findAll() {
    return JSON.parse(await fs.readFile(path.resolve(__dirname, 'memes.txt'), 'utf-8'));
  }

  static async findByPage(page) {
    const allPosts = await this.findAll();
    return page <= 5 ? allPosts.slice(10 * (page - 1), 10 * page) : allPosts.slice(0, 10);
  }
}

export default Post;
