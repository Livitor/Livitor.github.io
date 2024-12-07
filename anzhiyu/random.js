var posts=["2024/12/07/hello-world/","2024/12/07/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };