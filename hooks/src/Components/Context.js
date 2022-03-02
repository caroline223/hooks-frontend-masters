import { useState, useContext, createContext } from 'react'

const UserContext = createContext([
    {
        firstName: "Bob",
        lastName: "Smith",
        suffix: 1,
        email: "bob@email.com"
    }
], (obj) => obj)
    
const LevelFive = () => {
    const [user, setUser] = useContext(UserContext)
    return(
        <div>
            <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
            <button
                onClick={() => {
                    setUser(Object.assign({}, user, { suffix: user.suffix + 1}))
                }}
            >
                Increment
            </button>
        </div>
    )
}

const LevelFour = () => (
    <div>
        <h4>Level Four</h4>
        <LevelFive />
    </div>
)

const LevelThree = () => (
    <div>
        <h3>Level Three</h3>
        <LevelFour />
    </div>
)

const LevelTwo = () => (
    <div>
        <h2>Level Two</h2>
        <LevelThree />
    </div>
)

const ContextComponent = () => {

    const userState = useState({
        firstName: "Caroline",
        lastName: "James",
        suffix: 1,
        email: "caroline@email.com"
    })

    return(
        <div>
           <UserContext.Provider value={userState}>
               <h1>Level One</h1>
               <LevelTwo />
           </UserContext.Provider>
        </div>
    )

}
export default ContextComponent