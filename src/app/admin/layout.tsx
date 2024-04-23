import { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

export const Layout = (props: LayoutProps) =>{

    return(
        <>
        <h3>This is the admin section</h3>
        {props.children}
        </>
        
    ) 

}

export default Layout