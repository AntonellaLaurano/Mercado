const roles = []

export const rolById = async (id) => {
    const role = roles[id-1]
    return role
}