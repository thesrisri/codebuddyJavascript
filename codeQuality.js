// level {1/2/3}
// level 2

const getUsers = async () => {
  let doc = await Promise.all([getUser(), getProfile(), getPosts()]);
  let [user, profile, p] = doc;
  return ({
    user,
    profile,
    posts: p,
  });
};
