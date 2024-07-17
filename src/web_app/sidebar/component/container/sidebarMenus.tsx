import { classJoiner } from "@/src/common/utils/helper"
import SidebarMenu from "../core/sidebarMenu"
import { montserrat } from "@/src/common/utils/fonts"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import useSidemenu from "@/src/web_app/common/hooks/sidemenu"

type sidebarMenus = {
    class?: string
}
const SidebarMenus = (props: sidebarMenus) =>{
    const dashboardPath = "/app"
    const pathname = usePathname()
    const {isMenuVisible} = useSidemenu()

    useEffect(() => {
   
    }, [pathname])
    
    const menus = [
        {name: "Dashboard", icon: "", url: dashboardPath},
        {name: "Appliances", icon: "", url: dashboardPath + "/appliance"},
        {name: "Analytics", icon: "", url: dashboardPath + "/analytics"},
        {name: "Energy Plan", icon: "", url: dashboardPath + "/plan"},
    
    ]


    return(
        <div className={classJoiner("overflow-auto h-[calc(100vh-80px)] box-border transition-all py-6 md:px-3", isMenuVisible? "px-3":"px-0")}>
            <div className={classJoiner("flex flex-col h-[2000px]", props.class)}>
                {menus.map(menu=>{
                    if(pathname == menu.url){
                    return <SidebarMenu title={menu.name} icon={menu.icon} 
                        url={menu.url} active textClass={classJoiner(montserrat.className, "font-bold")} 
                        key={menu.name+" - " +menu.url}/> 
                    }
                    return <SidebarMenu title={menu.name} icon={menu.icon} 
                        url={menu.url} textClass={classJoiner(montserrat.className, "font-bold")} 
                        key={menu.name+" - " +menu.url}/> 
                })}
            </div>
        </div>
    )
}

export default SidebarMenus