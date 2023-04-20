function SingleProject(props) {
    return (
        <div className="singleproject">
            <div className="logo">
                <img src={"/projectImages" + props.image} width="150px" />
            </div>
            <div className="text">
                <h1>{props.name}</h1>
                <h2 className="more" dangerouslySetInnerHTML={{__html: props.description}}></h2>
                <h2 className="technology">{props.technology}</h2>
                <h2 className="more" dangerouslySetInnerHTML={{__html: props.moreinfo}}></h2>
            </div>
        </div>
    )
}

export default SingleProject