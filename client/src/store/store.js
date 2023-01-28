import create from 'zustand';

export const useAuthStore = create((set) => ({
    auth : {
        username : '',
        active : false
    },
    setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
}))


// To understand  mora about above function look at bellow part
// export const useAuthStore = create((set) => {
//     return({
//     auth : {
//         username : '',
//         active : false
//     },
//     setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
// })
// }
// )