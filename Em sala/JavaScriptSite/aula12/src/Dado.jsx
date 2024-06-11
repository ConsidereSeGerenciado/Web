export default function Dado({numFaces = 6}){
    
    let valor = Math.trunc(Math.random()*numFaces)+1;
    
    return(
        <p>Face do dado: {valor}</p>
    )
}