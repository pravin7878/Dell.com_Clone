export const hendelSearch = (e) => {
    if (e.key === "Enter" && quiry !== "") {
        console.log(quiry);
        setquiry("")
    }
}


export const hendelClick = () => {
    console.log(quiry);
    setquiry("")

}


export const hendelSingUp = () => {
    console.log("sing up clicked");

}

export const hendelSingIn = () => {
    console.log("sing in clicked");

}