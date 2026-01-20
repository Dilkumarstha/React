import ComponentB from "./ComponentB";

function ComponentA({numbA=0}){
    return(
<div>
    ValueA: {numbA+5}
<ComponentB numbB={numbA+5}/>
</div>
    )
}

export default ComponentA;