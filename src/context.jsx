import { createContext, useState, useContext } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    let [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return <AppContext.Provider value={{ isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal, }}>{children}</AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}