
const setApiRoutes = (state, smacApiRoutes) => {
    return {
        ...state,
        createUser: smacApiRoutes.createUser,
        deleteUser: smacApiRoutes.deleteUser,
        getUserByEmail: smacApiRoutes.getUserByEmail,
        getUserById: smacApiRoutes.getUserById,
        getUserByPhoneNumber: smacApiRoutes.getUserByPhoneNumber,
        listAllUsers: smacApiRoutes.listAllUsers,
        updateUser: smacApiRoutes.updateUser,
    };
}

export default setApiRoutes;