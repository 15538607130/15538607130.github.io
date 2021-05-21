import JSEncrypt from 'jsencrypt';

const APP_SECRET = 'hN7RAbEKC9LgfZWQJl8EksKQXLcaD9AK';

// RSA 加密公钥
// MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIqng8uU0DPhdHThIhRj6PHtXj
// cYDWnrbSwCtqPSgWShdFnkaZ0CM+iNceiqhxoWDOPYmthYJ9ZkMObUd6vJV1bVFM
// W4t6Z/NRIZniCpiA+0j0KeJ1qj7QjXHlMjqFHYZPgMogN2bsZLGq7xfvhXy7ZPwl
// fbzBNTYUlvwijZm13QIDAQAB
const RSA_PUBLIC_KEY = `
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzm4kBJAx2NmJhiwc8AevE4WMXCyVEA
eLe7CpHGjKh61VzeibUv5rxWSSsHVYCNb7bNe/sU8CQXCznMeP0o/KebpyeYY+ZRrnMax
nhRgqDZRJuBl19Tn7deFAKF9jsYEho9VVmOdEAUuS0bPVLGqOBKy8QjT0oZo521Ed2psV
GEQIDAQAB
`;

const encrypt = new JSEncrypt();

encrypt.setPublicKey(RSA_PUBLIC_KEY);

export default (v) => encrypt.encrypt(v);
