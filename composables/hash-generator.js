export const createHash = () => {
  // create random 6-character hash-id
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let HASH = [];

  for (let i = 0; i < 6; i++) {
    const randNum = Math.floor(Math.random() * chars.length);

    const char = chars[randNum];
    HASH.push(char);
  }
  HASH = HASH.join("");
  return HASH;
};
