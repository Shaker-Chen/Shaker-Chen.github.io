var posts=["posts/2025/4/","posts/2025/8/","posts/2025/1/","posts/2025/2/","posts/2025/3/","posts/2025/7/","posts/2024/111/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };