var hostState = 0; 

export function getHost(){

    {/**prod and dev hosts  */}
    const host = hostState === 0 ? 'http://localhost:8080/' : '' 
    return host
}