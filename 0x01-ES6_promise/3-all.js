import { createUser, uploadPhoto } from "./utils"

export default function handleProfileSignup() {
    Promise.all([createUser(), uploadPhoto()])
    .then((resolved) => {
        console.log(`${resolved[1].body} ${resolved[0].firstName} ${resolved[0].lastName}`)
    },
    (rejected) => {
        console.error("Signup system offline")
    })
}