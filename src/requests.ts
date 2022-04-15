export type User = { name: string; username: string };

export type UserList = Array<User & { password: string }>;

export async function login(username: string, password: string) {
  const resquest = await fetch("/users.json");
  //get the name ans password, and make a fetch request to a json file witch contains all inf about the users
  const usersJson: UserList = await resquest.json();
  return usersJson.find(
    (s) => s.password === password && s.username === username
  );
}

//check if the user is currently logged in, not save, just to show how to use composition API
// could be replaced with sessions or JWT
export async function getUser() {
  const request = await fetch("/current.json");
  const user: User = await request.json();
  return user;
}
