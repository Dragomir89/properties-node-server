import crypto from "crypto";

const SECRET = "my-API-secret";
export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
  return (
    crypto
      .createHmac("sha256", [salt, password].join("/"))
      // .update(process.env.SECRET)
      .update(SECRET)
      .digest("hex")
  );
};
