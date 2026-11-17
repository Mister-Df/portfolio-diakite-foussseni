export type MenuType={
    menuOpen: boolean,
    closeMenu: () => void,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type Booll ={
    sent: boolean,
    sending: boolean,
    contactError: string,
    setSent: React.Dispatch<React.SetStateAction<boolean>>,
    handleContact: React.FormEventHandler<HTMLFormElement>,
    name: string,
    email: string,
    message: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>
}

export type ProjectType={
    activeProject: number | null
    setActiveProject: React.Dispatch<React.SetStateAction<number | null>>
}