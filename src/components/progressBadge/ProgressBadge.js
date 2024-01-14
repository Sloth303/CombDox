
export const ProgressBadge = (props) => {
    props={
        progress: 0,
        bgBarColor: "#36887c",
        bgBarWidth: 10,
        progressColor: "#3fcbd0",
        progressWidth: 7,
        barWidth: 0.75,
        badgeBgColor: "#193d37",
        ...props
    }
    if(props.badgeSrc===undefined){
        console.log("ProgressBadge: badgeSrc is undefined")
        return
    }
return (<div
    style={{
        position: "relative",
        backgroundColor: props.badgeBgColor,
        borderRadius: "50%",
        height: "100%",

    }}
>
    <img
        src={props.badgeSrc}
        alt="badge"
        width="100%"
        height="100%"
        style={{
            display: "block",
            borderRadius: "50%",
        }}
    />
    <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <CircularProgressBar
            progress={props.progress}
            progressWidth={props.progressWidth}
            progressColor={props.progressColor}
            bgWidth={props.bgBarWidth}
            bgColor={props.bgBarColor}
            baseCircPercent={props.barWidth}
            style={{

                zIndex: 1, // Set a higher z-index value if needed
            }}
        />
    </div>
</div>
)
}

const CircularProgressBar=(props)=>{
    const viewBoxDimentions=100
    const r=viewBoxDimentions/2
    const baseCircLength=Math.PI*(r-props.bgWidth/2)*props.baseCircPercent*2
    const progressCircLength=Math.PI*(r-props.bgWidth+props.progressWidth/2)*props.baseCircPercent*2

    return(
        <svg width={"100%"} viewBox={`0 0 ${viewBoxDimentions} ${viewBoxDimentions}`}>
            <g transform={`rotate(${90+(1-props.baseCircPercent)*180} ${r} ${r})`}>
                <circle
                    cx={r}
                    cy={r}
                    r={r-props.bgWidth/2}
                    fill="none"
                    stroke={props.bgColor}
                    strokeWidth={props.bgWidth}
                    strokeDasharray={baseCircLength + " 1000"}
                />
                <circle
                    cx={r}
                    cy={r}
                    r={r-props.bgWidth+props.progressWidth/2}
                    fill="none"
                    stroke={props.progressColor}
                    strokeWidth={props.progressWidth}
                    strokeDasharray={`${progressCircLength*props.progress} 1000`}
                />
            </g>

        </svg>
    )
}