function Article (opts) {
    if(!opts) opts = {};
    this.title = opts.title || 'Bomdi Zane';
    this.url = opts.url || 'dzedock@gmail.com';
    this.text = opts.text || 'DON\'T write to my gmail :)';
}

module.exports = Article;
  
  