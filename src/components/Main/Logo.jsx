const Logo = (props) => {
    return <div className={"text-center"}>
        <img id="anima" src={props.isDarkMode ? "./assets/gifs/animaDark.gif" : "./assets/gifs/animaLight.gif"} alt="animaGIF" />
    </div>


}

export default Logo
