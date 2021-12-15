import { atom } from "recoil"

const loginAtom = atom({
    key: "loginAtom",
    default: {
        username: "Sang",
        password: "password"
    }
})

export default loginAtom
