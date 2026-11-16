export type MenuType={
    menuOpen: boolean,
    closeMenu: () => void,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type Booll ={
    sent: Boolean,
    setSent: React.Dispatch<React.SetStateAction<boolean>>,
    handleContact: React.FormEventHandler<HTMLFormElement>
}

export type ProjectType={
    activeProject: number | null
    setActiveProject: React.Dispatch<React.SetStateAction<number | null>>
}