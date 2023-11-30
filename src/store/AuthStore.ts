import { create } from "zustand";


interface IAuthStore {
    email: String,

    ApiLogin: () => void
}

const useAuthStore = create<IAuthStore>((set) => ({
        email : "",

        ApiLogin: () => set({
            
        })
 }));

export default useAuthStore;
