var hostState = 1; 

export function getHost(){

    {/**prod and dev hosts  */}
    const host = hostState === 0 ? 'http://localhost:8080/' : 'https://guitarshoppe.onrender.com/' 
    return host
}