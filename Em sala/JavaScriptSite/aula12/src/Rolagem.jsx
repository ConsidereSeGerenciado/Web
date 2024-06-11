import Dado from "./Dado"

export default function Rolagem({face1, face2, face3}){

    return(
        <>
            <Dado numFaces={face1}/>
            <Dado numFaces={face2}/>
            <Dado numFaces={face3}/>
        </>
    )
}