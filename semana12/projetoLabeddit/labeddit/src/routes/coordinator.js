export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToPostDetails = (history, id) => {
    history.push(`/post/detalhes/${id}`)
}

export const goToFeed = (history) => {
    history.push("/")
}