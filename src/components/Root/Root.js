import React, {useState, useEffect} from "react";

import './Root.css';
import 'react-player';
import ReactPlayer from "react-player";

const Root = () => {
	window.addEventListener("resize", resize);
	const [isSmallScreenPortraitVideo, setIsSmallScreenPortraitVideo] = useState(window.innerWidth < 820 ? true : false);
	const [isSmallScreenLandscapeVideo, setIsSmallScreenLandscapeVideo] = useState(window.innerWidth < 900 ? true : false);

	function resize() {
		console.log(window.innerWidth);
		if (window.innerWidth < 820)
			setIsSmallScreenPortraitVideo(true);
		else
			setIsSmallScreenPortraitVideo(false);

		if (window.innerWidth < 900)
			setIsSmallScreenLandscapeVideo(true);
		else
			setIsSmallScreenLandscapeVideo(false);
	}

	function div_container_phone(backgroundColor) {
		if (isSmallScreenLandscapeVideo)
			return {textAlign: 'center', position: 'relative', height: 'auto', minHeight: '100%', width: window.innerWidth, overflow: 'auto', paddingTop: 30, paddingBottom: 30, backgroundColor: backgroundColor}
		else
			return {textAlign: 'center', position: 'relative', height: 'auto', minHeight: '100%', width: window.innerWidth, overflow: 'auto', paddingTop: 30, paddingBottom: 30, backgroundColor: backgroundColor}
	}

	return (
		<div className={"container_background"} style={{width: window.innerWidth}}>
			<div className={"container_headband"}>
				<button className={"text_headband"} style={{marginRight: '0%'}}>Werewolf</button>
				<button className={"text_headband"}>Time Bomb</button>
				<button className={"text_headband"}>Maze Adventure</button>
			</div>
			<div className={"content_container_phone"}>
				<div style={div_container_phone("#FF4655")}>
					<ReactPlayer className={(isSmallScreenPortraitVideo ? "video_container_portrait_phone" : "video_container_portrait")} url={'https://youtu.be/hCzs0sIr5lI'} config={{youtube: {embedOptions: {width: '100%', height: '100%'}, playerVars: {showinfo: 0}}}} playing={true} loop={true}/>
					<div className={"description_container"}>
						<div style={{color: "#FFF", display: 'contents'}}>
							<span className={"background_text"}>Time Bomb</span>
							<span className={"description_title"}>Time Bomb</span>
							<div style={{marginBottom: 30}}>
								<span className={"description_text"} style={{textDecoration: 'underline'}}>Technologie utilisées:</span>
								<span className={"description_text"}>NodeJs | React</span>
							</div>
							<span className={"description_text"}>Projet réalisé en 2 semaines pendant mon temps libre.</span>
							<span className={"description_text"}>Le but de ce projet est de pouvoir jouer au jeux de société Time Bomb n'importe où.</span>
							<span className={"description_text"}>Je n'ai pas réalisé d'application pour ce projet car je veux que tout le monde puisse y jouer sans rien installer, ainsi toutes personnes peut se joindre en soirée à une partie par example.</span>
						</div>
					</div>
				</div>

				<div style={div_container_phone("#FFF")}>
					<ReactPlayer className={(isSmallScreenPortraitVideo ? "video_container_portrait_phone" : "video_container_portrait")} url={'https://youtu.be/CGfeq1l48JI'} config={{youtube: {embedOptions: {width: '100%', height: '100%'}, playerVars: {showinfo: 0}}}} playing={true} loop={true}/>
					<div className={"description_container"}>
						<div style={{color: "#768079", display: 'contents'}}>
							<span className={"description_title"}>WereWolf / Loup Garou</span>
							<div style={{marginBottom: 30}}>
								<span className={"description_text"} style={{textDecoration: 'underline'}}>Technologie utilisées:</span>
								<span className={"description_text"}>NodeJs | React</span>
							</div>
							<span className={"description_text"}>Projet réalisé en 7 jours pendant mon temps libre.</span>
							<span className={"description_text"}>Le but de ce projet est de pouvoir jouer au jeux de société Loup Garou nimporte où.</span>
							<span className={"description_text"}>Il permet d'avoir un mélangeur de rôle afin de pouvoir jouer ou que l'on est.
								Le premier joueur à se connecter est le maître du jeu et peut décider des rôles.
								Quand une personne meurt, elle peut dévoiler son rôle aux autres joueurs avec le bouton de révélation.</span>
							<span className={"description_text"}>Je n'ai pas réalisé d'application pour ce projet car je veux que tout le monde puisse y jouer sans rien installer, ainsi toute personne peut se joindre en soirée à une partie par example.</span>
						</div>
					</div>
				</div>

				<div style={div_container_phone("#0F1923")}>
					<div className={"description_container"}>
						<div style={{color: "#FFF", display: 'contents'}}>
							<span className={"description_title"}>MazeAdventure</span>
							<div style={{textAlign: 'center', marginBottom: 30}}>
								<div style={{display: "inline-block"}}>
									<ReactPlayer className={(isSmallScreenLandscapeVideo ? "video_container_landscape_phone" : "video_container_phone")}  url={'https://youtu.be/tVsqJKOjwwg'} config={{youtube: {embedOptions: {width: '100%', height: '100%'}, playerVars: {showinfo: 0}}}} playing={true} loop={true}/>
								</div>
							</div>
							<div style={{marginBottom: 30}}>
								<span className={"description_text"} style={{textDecoration: 'underline'}}>Technologie utilisées:</span>
								<span className={"description_text"}>Unity | C#</span>
							</div>
							<span className={"description_text"}>Projet en cours de réalisation.</span>
							<span className={"description_text"}>Le but du jeux est de trouver la sortie du labyrinthe afin de récolter tous les trésors</span>
							<span className={"description_text"}>Il y a un système de loot, et de build afin d'aider le joueur dans sa quête.</span>
							<span className={"description_text"}>Le jeux est en cours de réalisation, c'est pourquoi il peut y avoir des bugs et des features manquantes.</span>
							<span className={"description_text"}>Dans le jeux, un carré vert représente la sortie, celui de couleur bleu représente la clé de la salle secrète, le carré rouge représente la salle secrète lorsqu'elle est fermée, celle-ci passe au orange une fois la clé récupérée.</span>
							<span className={"description_text"} style={{textDecoration: 'underline'}}>Ce que j'aime:</span>
							<span className={"description_text"}>- J'ai designé moi même le système de loot afin de pouvoir gérer le taux de drop de chaque item.</span>
							<span className={"description_text"}>- Le système de build, autant la conception pour réaliser quelque chose d'équilibré que la réalisation qui réserve ses petits imprévus !</span>
							<span className={"description_text"}>Pour le tester &nbsp; <a href={'https://simmer.io/@cryan/mazeadventure'} target={'_blank'}> cliquez ici</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Root;